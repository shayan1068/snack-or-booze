import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import axios from "axios";

function Home() {
  const [snackCount, setSnackCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);

  // Fetch snack and drink data from the backend
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch snacks
        const snacksResponse = await axios.get("http://localhost:5000/snacks");
        setSnackCount(snacksResponse.data.length);

        // Fetch drinks
        const drinksResponse = await axios.get("http://localhost:5000/drinks");
        setDrinkCount(drinksResponse.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="col-md-6">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p className="home-info">
            We have <span className="highlight">{snackCount}</span> snacks and{" "}
            <span className="highlight">{drinkCount}</span> drinks available.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
