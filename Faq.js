import React from "react";

const FaqSection=()=>{
  return(
    <>
   <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" />
          <label htmlFor="first">What is NetFlix?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second" />
          <label htmlFor="second">How much does NetFlix cost?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label htmlFor="third">Where can I watch?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label htmlFor="fourth">How do I cancel?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fifth" />
          <label htmlFor="fifth">What can I watch on NetFlix?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="sixth" />
          <label htmlFor="sixth">Is NetFlix good for kids?</label>
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloremque corporis itaque labore, odio, veritatis iusto soluta voluptas perferendis velit quia quae facilis voluptates tempore nam harum eos? Nulla, esse.</p>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}

export {FaqSection};