import React from "react";
import "./Card.css";
import { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);

  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <ul>
              <li
                key={index}
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <div className="card" data-effect="blur">
                  <figure className="card__image">
                    <img
                      src={item.volumeInfo.imageLinks.smallThumbnail}
                      alt="Short description"
                    />
                  </figure>
                  <div className="card__body">
                    <h3 className="card__name">{item.volumeInfo.title}</h3>
                    <p className="card__authors">{item.volumeInfo.authors}</p>
                    <p className="card__bio"> {item.volumeInfo.description}</p>
                  </div>
                </div>
              </li>

              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </ul>
          );
        }
      })}
    </>
  );
};

export default Card;
