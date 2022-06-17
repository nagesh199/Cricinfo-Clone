import React from "react";
import db from "./db.json";

//import PageItem from "./PageItem";
const PageDetails = () => {
  console.log(db);

  return (
    <div className="container">
      {db.db.map((item) => (
        <div key={item.id}>
          <div>
            <img
              style={{ height: "30%", width: "40%", borderRadius: "5px" }}
              src={item.imageURL1}
              alt=""
            />
            <div
              style={{
                marginTop: " -2%",
                textAlign: "justify",
                height: "5%",
                width: "40%",
                backgroundColor: "black",
                color: "white",
                marginLeft: "30%",
              }}
            >
              <h2>{item.heading1}</h2>
              <p>{item.paragraph1}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginLeft: "30%",
              marginTop: "-300px",
             
            }}
          >
            <img
              style={{ height: "30%", width: "14%", borderRadius: "10px" }}
              src={item.imageURL2}
              alt=""
            />
            <div style={{ height: "14%", width: "40%", textAlign: "justify" }}>
              <h3 style={{ marginTop: "-1%" }}>{item.heading2}</h3>
              <p style={{ marginTop: "-5%" }}>{item.para2}</p>
            </div>
          </div    >

          <div style={{ marginTop: "-300px" }}>
            <div style={{ marginLeft: "-23%" }}>
              <h3>{item.heading4}</h3>
              <p>{item.para41}</p>
            </div>

            <div style={{ display: "flex", marginLeft: "31%" }}>
              <div style={{ textAlign: "left" }}>
                <h5>{item.para42}</h5>
                <h4>{item.para43}</h4>
                <h4>{item.para44}</h4>
                <p>{item.para45}</p>
              </div>
              <div style={{ textAlign: "left", marginLeft: "25%" }}>
                <p>{item.runs4}</p>
                <p>{item.score4}</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "30%",marginTop: "-1%" }}>
            <img
              style={{ marginLeft: "-30%", borderRadius: "10px" }}
              src={item.imageURL5}
              alt=""
            />
            <div style={{ textAlign: "justify" }}>
              <h2>{item.heading5}</h2>
              <p>{item.para5}</p>
            </div>
          </div>
          <div style={{ marginLeft: "30%" }}>
            <img
              style={{ marginLeft: "-30%", borderRadius: "10px" }}
              src={item.imageURL6}
              alt=""
            />
            <div style={{ textAlign: "justify" }}>
              <h2>{item.heading6}</h2>
              <p>{item.para6}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "30%" }}>
            <img
              style={{ height: "30%", width: "14%", borderRadius: "10px" }}
              src={item.imageURL7}
              alt=""
            />
            <div style={{ height: "14%", width: "40%", textAlign: "justify" }}>
              <h3 style={{ marginTop: "-1%" }}>{item.heading7}</h3>
              <p style={{ marginTop: "-5%" }}>{item.para7}</p>
              <div style={{ marginLeft: "-39%" }}>
                <p>{item.para71}</p>

                <p>{item.para72}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginLeft: "-23%" }}>
              <h3>{item.heading8}</h3>
              <p>{item.para81}</p>
            </div>

            <div style={{ display: "flex", marginLeft: "31%" }}>
              <div style={{ textAlign: "left" }}>
                <h5>{item.para82}</h5>
                <h4>{item.para83}</h4>
                <h4>{item.para84}</h4>
                <p>{item.para85}</p>
              </div>
              <div style={{ textAlign: "left", marginLeft: "25%" }}>
                <p>{item.runs8}</p>
                <p>{item.score8}</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "30%", width: "100%" }}>
            <img
              style={{ marginLeft: "-55%", borderRadius: "10px", width: "45%" }}
              src={item.imageURL9}
              alt=""
            />
            <div style={{ textAlign: "justify" }}>
              <h2>{item.heading9}</h2>
              <p>{item.para9}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "30%" }}>
            <img
              style={{ height: "30%", width: "14%", borderRadius: "10px" }}
              src={item.imageURL10}
              alt=""
            />
            <div style={{ height: "14%", width: "40%", textAlign: "justify" }}>
              <h3 style={{ marginTop: "-1%" }}>{item.heading10}</h3>
              <p style={{ marginTop: "-5%" }}>{item.para101}</p>

              <div style={{ marginLeft: "-39%", marginTop: "30%" }}>
                <p>{item.para102}</p>
                <p>{item.para103}</p>
                <p>{item.para104}</p>
                <p>{item.para105}</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginLeft: "-23%" }}>
              <h3>{item.heading11}</h3>
              <p>{item.para111}</p>
            </div>

            <div style={{ display: "flex", marginLeft: "31%" }}>
              <div style={{ textAlign: "left" }}>
                <h5>{item.para112}</h5>
                <h4>{item.para113}</h4>
                <h4>{item.para114}</h4>
                <p>{item.para115}</p>
              </div>
              <div style={{ textAlign: "left", marginLeft: "25%" }}>
                <p>{item.runs11}</p>
                <p>{item.score11}</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "30%", width: "100%", marginTop: "-3%" }}>
            <img
              style={{ marginLeft: "-55%", borderRadius: "10px", width: "45%" }}
              src={item.imageURL12}
              alt=""
            />
            <div style={{ textAlign: "justify" }}>
              <h2>{item.heading12}</h2>
              <p>{item.para12}</p>
              <p>{item.para116}</p>
            </div>
          </div>
          <div>
            <h3>{item.heading13}</h3>
            <p>{item.para13}</p>

            <img
              style={{ height: "40%", width: "34%", borderRadius: "10px" }}
              src={item.imageURL13}
              alt=""
            />
            <div style={{ marginLeft: "-39%", marginTop: "30%" }}>
              <p>{item.para132}</p>
              <p>{item.para133}</p>
            </div>
          </div>
          <div>
            <div style={{ marginLeft: "-23%" }}>
              <h3>{item.heading14}</h3>
              <p>{item.para141}</p>
            </div>

            <div style={{ display: "flex", marginLeft: "31%" }}>
              <div style={{ textAlign: "left" }}>
                <h5>{item.para142}</h5>
                <h4>{item.para143}</h4>
                <h4>{item.para144}</h4>
                <p>{item.para145}</p>
              </div>
              <div style={{ textAlign: "left", marginLeft: "25%" }}>
                <p>{item.runs14}</p>
                <p>{item.score14}</p>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "30%", width: "100%", marginTop: "-3%" }}>
            <img
              style={{ marginLeft: "-55%", borderRadius: "10px", width: "45%" }}
              src={item.imageURL15}
              alt=""
            />
            <div style={{ textAlign: "justify" }}>
              <h2>{item.heading15}</h2>
              <p>{item.para15}</p>
            </div>
          </div>
          <div>
            <h3 style={{ marginTop: "-1%" }}>{item.heading16}</h3>
            <img src={item.imageURL16} alt="" />
            <div>
              <p>{item.para16}</p>
              <p>{item.para161}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PageDetails;
