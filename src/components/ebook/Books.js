import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import AddBook from "./AddBook";
import Book from "./Book";
import Loader from "../utils/Loader";
import { Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import {
  getBooks,
  buyBook,
  createBook,
} from "../utils/ebook";

const Books = () => {
    const [books, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getBook = useCallback(async () => {
      try {
        setLoading(true);
        setBook(await getBooks());
      } catch (error) {
        console.log({ error });
      } finally {
        setLoading(false);
      }
    });
    const addBook = async (data) => {
        try {
          setLoading(true);
          createBook(data).then((resp) => {
            getBook();
          });
          toast(<NotificationSuccess text="Book added successfully." />);
        } catch (error) {
          console.log({ error });
          toast(<NotificationError text="Failed to create a Book." />);
        } finally {
          setLoading(false);
        }
    }
    const  buy = async (ISBN, buyPrice) => {
        try {
          console.log("hi")
          await buyBook({
            ISBN,
            buyPrice,
          }).then((resp) => getBooks());
          toast(<NotificationSuccess text="Book bought successfully" />);
        } catch (error) {
          console.log(error)

          toast(<NotificationError text="Failed to purchase Book." />);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        console.log("useEffect called");
        getBook();
      }, []);
      return (
        <>
          {!loading ? (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fs-4 fw-bold mb-0">Book Store</h1>
                <AddBook save={addBook} />
              </div>
              <Row xs={1} sm={2} lg={3} className="g-3  mb-5 g-xl-4 g-xxl-5">
                {books.map((_book) => (
                  <Book
                    book={{..._book,
                    
                    }}
                    buy= {buy}
                  />         
                ))}

              </Row>
            </>
          ) : (
            <Loader />
          )}
        </>
      );
    };
    
    export default Books;

//     ISBN: "567"
// author_name: "christy11.testnet"
// borrowPrice: null
// borrowed: 0
// buyPrice: null
// img: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/384342/1.jpg?8724"
// name: "The little prince"
// pubication_year: "1999"
// sold: 0
// type: "Children"

