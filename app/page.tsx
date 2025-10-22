
import Image from "next/image";
import productDemo from "../app/Product Demo.jpeg"
import React from "react";
import ButtonLogin from "../components/ButtonLogin";
import FAQListItem from "../components/FAQListItem";


export default function Home() {
  const isLoggedIn = true;
  const name = "Aathira";

  const greeting1 = `Hello ${name}`;
  console.log(greeting1); // Hello Aathira

  const greeting2 = `Hello ${isLoggedIn ? name : "there"}`;
  console.log(greeting2); // Hello Aathira

  return (
    <>
      <section className="bg-base-200 py-32 px-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{greeting2}</h1>
        <Image src={productDemo} alt="Product demo" width={600} height={400} />
      </section>

      <section className="bg-base-200 py-32 px-8" id="pricing">
        <p className="text-sm uppercase font-medium">Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          A pricing that adapts to your needs.
        </h2>

        <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto mt-8">
          <div className="flex gap-2 items-baseline">
            <div className="text-4xl font-black">$19</div>
            <div className="uppercase text-sm font-medium opacity-70">/month</div>
          </div>

          <ul className="my-4 text-left space-y-1">
            <li>✔️ Collect customer feedback</li>
            <li>✔️ Unlimited boards</li>
            <li>✔️ Admin dashboard</li>
            <li>✔️ 24/7 support</li>
          </ul>

          <button className="btn btn-outline btn-primary w-full mb-2">
            Welcome Back
          </button>

          <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full" />
        </div>
      </section>

      <section className="bg-base-200 py-32 px-8" id="faq">
        <p className="text-sm uppercase font-medium">FAQ</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
          Frequently Asked Questions
        </h2>
        <ul>
          {[
            { question: "What do I get exactly?", answer: "Lorem Ipsum" },
            { question: "Can I get a refund?", answer: "Lorem Ipsum" },
            { question: "I have another question", answer: "Lorem Ipsum" },
          ].map((qa) => (
            <FAQListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>
    </>
  );
}
