import "../assets/css/details.css";
import voiture from "../assets/images/voiture.jpg";
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

function Detailproduit(){

    useEffect(() => {
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;

        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });

        function slideImage() {
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
            document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        }

        window.addEventListener('resize', slideImage);

        return () => {
            imgBtns.forEach((imgItem) => {
                imgItem.removeEventListener('click', (event) => {
                    event.preventDefault();
                    imgId = imgItem.dataset.id;
                    slideImage();
                });
            });

            window.removeEventListener('resize', slideImage);
        };
    }, []);
    return(
        <div className="test-wrapper">
            <div className="test">
                <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            <img src={voiture} alt={"shoe image"} />
                            <img src={voiture} alt={"shoe image"} />
                            <img src={voiture} alt={"shoe image"} />
                            <img src={voiture} alt={"shoe image"} />
                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <Link to="/" data-id="1">
                                <img src={voiture} alt={"shoe image"} />
                            </Link>
                        </div>
                        <div className="img-item">
                            <Link to="/" data-id="2">
                                <img src={voiture} alt={"shoe image"} />
                            </Link>
                        </div>
                        <div className="img-item">
                            <Link to="/" data-id="3">
                                <img src={voiture} alt={"shoe image"} />
                            </Link>
                        </div>
                        <div className="img-item">
                            <Link to="/" data-id="4">
                                <img src={voiture} alt={"shoe image"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = "product-content">
                    <h2 className = "product-title">Nom voiture</h2>

                    <div className = "product-price">
                        <p className = "last-price">Old Price: <span>$257.00</span></p>
                        <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
                    </div>

                    <div className = "product-detail">
                        <h2>Informations générales: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                            <li>Couleur: <span>Black</span></li>
                            <li>Disponibilité: <span>in stock</span></li>
                            <li>Categorie: <span>Shoes</span></li>
                        </ul>
                    </div>

                    <div className = "purchase-info">
                            <button type = "button" className = "btn">
                                Contactez <i class = "fas fa-shopping-cart"></i>
                            </button>
                            <button type = "button" class = "btn">Envoyez message</button>
                    </div>

                    <div className = "social-links">
                        <Link to="/">
                            <i className = "fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/">
                            <i className = "fab fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i className = "fab fa-instagram"></i>
                        </Link>
                        <Link to="/">
                            <i className = "fab fa-whatsapp"></i>
                        </Link>
                        <Link to="/">
                            <i className = "fab fa-pinterest"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detailproduit;