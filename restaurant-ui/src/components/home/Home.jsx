import React from "react";

export default function Home() {
  return (
    <div>
      <section>
        <h2>
          We’re here to help you live life the panda way. Spend more time doing
          what you love – we’ll take care of tasty meals, fresh groceries and
          new flavours.
        </h2>
      </section>

      <section className="py-8 md:py-0 md:my-0 w-full bg-white " id="">
        <div>
          <div>
            <h2>Meet the next generation of delivery! </h2>
            <p>
              What makes quick commerce quick? We stand for swift personalised
              delivery solutions for our customers, partners and employees.
              Learn how we empower authentic lifestyles and drive innovation
              across the globe.
            </p>
          </div>
          <div>
            <div>
              <img
                width="900"
                height="500"
                data-src="https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg"
                alt=""
                className="w-full h-full lazy-loaded"
                src="https://www.foodpanda.com/wp-content/uploads/2023/02/fp-home.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
