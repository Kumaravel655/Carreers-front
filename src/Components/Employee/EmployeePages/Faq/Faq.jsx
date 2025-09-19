import { useState, useRef, useEffect } from "react";
import Navbar from "../../EmployeeComponents/Navbar";
import "./Faq.css";

const faqData = [
  {
    category: "Your Account",
    items: [
      {
        question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium lacus ac ex tempus, sed dictum libero lacinia. Cras velit mauris, venenatis vel posuere at, scelerisque sed eros.",
      },
      {
        question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
        answer: "Sed euismod, nisi vel consectetur cursus, nisl nunc fermentum felis.",
      },
      {
        question: "Morbi vitae neque eu sapien aliquet rhoncus.",
        answer: "Aliquam erat volutpat. Integer vel justo nec eros luctus scelerisque.",
      },
    ],
  },
  {
    category: "Employers and Jobs",
    items: [
      {
        question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
        answer: "Vestibulum euismod massa in ligula imperdiet, id ullamcorper nisi cursus.",
      },
      {
        question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
        answer: "Ut sit amet tortor et felis gravida tincidunt eget in leo.",
      },
      {
        question: "Morbi vitae neque eu sapien aliquet rhoncus.",
        answer: "Nullam fermentum eros a libero iaculis, vel vehicula turpis commodo.",
      },
    ],
  },
  {
    category: "Candidate & Resume",
    items: [
      {
        question: "Donec in ipsum sit amet mi tincidunt lacinia ut id risus.",
        answer: "Nam suscipit eros sit amet lectus vestibulum, nec hendrerit arcu imperdiet.",
      },
      {
        question: "Etiam rutrum ligula at dui tempor, eu tempus ligula tristique.",
        answer: "Curabitur vitae risus sed lacus luctus laoreet.",
      },
      {
        question: "Morbi vitae neque eu sapien aliquet rhoncus.",
        answer: "Integer tincidunt ligula sit amet tortor vehicula, non placerat purus tempus.",
      },
    ],
  },
];

const FaqItem = ({ item, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <div className="faq-question" onClick={onClick}>
        <span className={`faq-title ${isOpen ? "active-title" : ""}`}>
          {item.question}
        </span>
        <span className="faq-icon">{isOpen ? "✕" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        className="faq-answer"
        style={{ maxHeight: height }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let itemCounter = 0;

  return (
    <>
      <Navbar/>
      <div className="faq-container">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h3>{section.category}</h3>
          {section.items.map((item, itemIndex) => {
            itemCounter++;
            const currentIndex = itemCounter;
            return (
              <FaqItem
                key={itemIndex}
                item={item}
                isOpen={openIndex === currentIndex}
                onClick={() => toggleFAQ(currentIndex)}
              />
            );
          })}
        </div>
      ))}
    </div>
    </>
  );
};

export default Faq;
