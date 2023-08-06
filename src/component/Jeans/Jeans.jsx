import './Jeans.css'

const Jeans = () => {
 return (
  <div>
      <div className="">
        <h2 className="jeans-features-title">আমাদের ডেনিম ও জিন্সের কিছু বৈশিষ্ট্য</h2>
        <div className="jeans-features-columns">
          <div>
            <div className="features-point">
              <img src="./images/checked.png" alt="" />
              <p>ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়।</p>
            </div>
            <div className="features-point">
              <img src="./images/checked.png" alt="" />
              <p>ডেনিম ফেব্রিক দিয়ে তৈরি পোশাক অনেকদিন ব্যবহার করা যায়।</p>
            </div>
            <div className="features-point">
              <img src="./images/checked.png" alt="" />
              <p>দীর্ঘদিন ব্যবহার করা যায়।</p>
            </div>
          </div>
          <div>
            <div className="features-point">
              <img src="./images/checked.png" alt="" />
              <p>সহজে ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।</p>
            </div>
            <div className="features-point">
              <img src="./images/checked.png" alt="" />
              <p>জিন্স বারবার ধোয়ার প্রয়োজন হয় না।</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="bunch-jeans-img">
            <img className="bunch-jeans" src="./images/bunch-twisted-jeans.png" alt="" />
          </div>
          <div className="btns-on-jeans-img">
            <img className="ellipse" src="./images/Ellipse.png" alt="" />
            <img className="play-btn" src="./images/play-button.png" alt="" />
          </div>
          <div className="some-instructions">
            <h2>লেনদেনকালে কিভাবে নিরাপদ থাকবেন তার কিছু নির্দেশনাবলী</h2>
            <div className="instructions-points">
              <p>প্রোডাক্টটি ভালোভাবে যাচাই করে নিন এবং পুরোপুরি সন্তুষ্ট হলে তারপর দাম পরিশোধ করুন।</p>
              <p>প্রোডাক্ট ও অর্থ দুটোই একই সময় লেনদেন করুন</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="jeans-peice">
          <img className="jeans-peice-img" src="./images/jeans-peice.png" alt="" />
          <h2>মুল্য-550.00 টাকা</h2>
          <h4>সারা দেশে ফ্রি হোম ডেলিভারি</h4>
          <div className="btn-secondary-div">
            <button className="btn-secondary">
              <p>অর্ডার করুন</p>
              <img src="./images/right-arrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>

  
 );
};

export default Jeans;