import { useState } from "react";
import "./App.css";
import How from "./components/How";
import Home from "./components/Home";
import logo from "/Logo.jpeg";

function App() {
  const borderTypes = [
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial",
    "inherit",
  ];

  const [boxStyles, setBoxStyles] = useState({
    radius: 20,
    color1: "#f00",
    color2: "#f0f",
    bgColor: "#e0e6ff",
    borderPx: 2,
    borderType: "solid",
    borderColor: "#fff",
    width: 200,
    height: 200,
  });

  const [shadows, setShadows] = useState([
    { x: 20, y: 10, blur: 10, spread: 3, color: "#555", inset: true },
  ]);

  const addShadows = (x, y, blur, spread, color, inset) => {
    return { x, y, blur, spread, color, inset };
  };

  const delShadows = (index) => {
    const deltedShadow = [...shadows];
    deltedShadow.splice(index, 1);
    setShadows(deltedShadow);
  };

  const handleChange = (value, property, index) => {
    const newShadows = [...shadows];
    newShadows[index][property] = value;
    setShadows(newShadows);
  };

  const toggleInset = (index) => {
    const newShadows = [...shadows];
    newShadows[index].inset = !newShadows[index].inset;
    setShadows(newShadows);
  };

  const handleStyleChange = (e, key) => {
    const value = e.target.value;
    setBoxStyles((prevStyles) => {
      const newStyle = prevStyles;
      newStyle[key] = value;
      return {
        ...prevStyles,
        [key]: value,
      };
    });
  };

  document.querySelector("body").style.background = boxStyles.bgColor;

  let code = `.box { width: ${boxStyles.width}; height: ${
    boxStyles.height
  }; border: ${boxStyles.borderPx}px ${boxStyles.borderType} ${
    boxStyles.bgColor
  }; background: linear-gradient(45deg, ${boxStyles.color1}, ${
    boxStyles.color2
  }); border-radius: ${boxStyles.radius}px; box-shadow: ${shadows
    .map(
      (shadow) =>
        `${shadow.inset ? "inset" : ""} ${shadow.x}px ${shadow.y}px ${
          shadow.blur
        }px ${shadow.spread}px ${shadow.color}`
    )
    .join(", ")}; }`;

  return (
    <>
      <section className="container">
        <Home />

        <div
          id="box"
          className="box"
          style={{
            width: `${boxStyles.width}px`,
            minWidth: `${boxStyles.width}px`,
            height: `${boxStyles.height}px`,

            boxSizing: "border-box !important",
            border: `${boxStyles.borderPx}px ${boxStyles.borderType} ${boxStyles.borderColor} `,
            borderRadius: `${boxStyles.radius}px`,
            boxShadow: shadows
              .map(
                (shadow) =>
                  `${shadow.inset ? "inset" : ""} ${shadow.x}px ${shadow.y}px ${
                    shadow.blur
                  }px ${shadow.spread}px ${shadow.color}`
              )
              .join(", "),
            background: `linear-gradient(45deg, ${boxStyles.color1}, ${boxStyles.color2})`,
          }}
        >
          .box
        </div>
      </section>

      <main>
        <div className="controls">
          <div>
            <div className="radius">
              <label htmlFor="radius">Radius : </label>
              <input
                type="range"
                id="radius"
                min="0"
                max="100"
                value={boxStyles.radius}
                onChange={(e) => {
                  handleStyleChange(e, "radius");
                }}
              />
            </div>

            <div id="inner1">
              <label htmlFor="bgcolor">Color :</label>

              <input
                type="text"
                id="bgcolor"
                value={boxStyles.color1}
                className="input-bg"
                data-coloris
                style={{ background: boxStyles.color1 }}
                onInput={(e) => {
                  handleStyleChange(e, "color1");
                }}
              />

              <input
                type="text"
                id="bgcolor1"
                value={boxStyles.color2}
                className="input-bg"
                data-coloris
                style={{ background: boxStyles.color2 }}
                onInput={(e) => {
                  handleStyleChange(e, "color2");
                }}
              />
            </div>

            <div id="inner2">
              <label htmlFor="bgcolor2">Background-Color :</label>
              <input
                type="text"
                id="bgcolor2"
                value={boxStyles.bgColor}
                className="input-bg"
                data-coloris
                style={{ background: boxStyles.bgColor }}
                onInput={(e) => {
                  handleStyleChange(e, "bgColor");
                }}
              />
            </div>
          </div>

          <button
            id="addBtn"
            onClick={() => {
              setShadows([
                ...shadows,
                addShadows(20, 10, 10, 3, "#555", false),
              ]);
            }}
          >
            Add Box Shadow
          </button>
        </div>

        <div className="border-styles">
          <div>
            <label>Border : </label>
            <input
              type="range"
              value={boxStyles.borderPx}
              className="border-px"
              min="0"
              max="30"
              onInput={(e) => {
                handleStyleChange(e, "borderPx");
              }}
            />
            <select
              onInput={(e) => {
                handleStyleChange(e, "borderType");
                console.log(boxStyles);
              }}
            >
              {borderTypes.map((type) => {
                let selected = boxStyles.borderType == type;
                return (
                  <option value={type} selected={selected}>
                    {type.toUpperCase()}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              value={boxStyles.borderColor}
              className="input-bg"
              data-coloris
              style={{ background: boxStyles.borderColor }}
              onInput={(e) => {
                handleStyleChange(e, "borderColor");
              }}
            />
          </div>
          <div className="h-w">
            <label>Width : </label>
            <input
              type="range"
              value={boxStyles.width}
              min="0"
              max="350"
              onInput={(e) => {
                handleStyleChange(e, "width");
              }}
            />
            <label>Height : </label>
            <input
              type="range"
              value={boxStyles.height}
              min="0"
              max="350"
              onInput={(e) => {
                handleStyleChange(e, "height");
              }}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Inset</th>
              <th>X</th>
              <th>Y</th>
              <th>Blur</th>
              <th>Spread</th>
              <th>Color</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {shadows.map((shadow, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    data-type="inset"
                    checked={shadow.inset}
                    onChange={() => toggleInset(index)}
                  />
                </td>
                <td>
                  <input
                    type="range"
                    min="-200"
                    max="200"
                    value={shadow.x}
                    onChange={(e) => handleChange(e.target.value, "x", index)}
                  />
                </td>
                <td>
                  <input
                    type="range"
                    min="-200"
                    max="200"
                    value={shadow.y}
                    onChange={(e) => handleChange(e.target.value, "y", index)}
                  />
                </td>
                <td>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={shadow.blur}
                    onChange={(e) =>
                      handleChange(e.target.value, "blur", index)
                    }
                  />
                </td>
                <td>
                  <input
                    type="range"
                    min="-100"
                    max="100"
                    value={shadow.spread}
                    onChange={(e) =>
                      handleChange(e.target.value, "spread", index)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={shadow.color}
                    data-type="color"
                    className="input-bg"
                    onInput={(e) =>
                      handleChange(e.target.value, "color", index)
                    }
                    data-coloris
                    style={{ background: shadow.color, color: "#fff" }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      delShadows(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <pre>
          <button id="copy">Copy</button>
          <code className="language-css" >
          {code}
          </code>
        </pre> */}

        <div className="pre">
          <button id="copy" onClick={navigator.clipboard.writeText(code)}>
            Copy
          </button>
          {code}
        </div>
      </main>

      <section className="template">
        <h2 className="temp">Templates :</h2>
        <div className="s-styles">
          <span
            onClick={() => {
              setShadows([
                addShadows(3, 5, 30, 2, "#3b3b3b59", false),
                addShadows(15, 20, 30, -5, "#4a1b1bba", true),
              ]);
              setBoxStyles({
                radius: 100,
                color1: "#ff0000",
                color2: "#80ff00",
                bgColor: "#e0e6ff",
                borderPx: 6,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span1"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(-5, 5, 0, 0, "rgba(240, 46, 170, 0.4)", false),
                addShadows(-10, 10, 0, 0, "rgba(240, 46, 170, 0.3)", false),
                addShadows(-15, 15, 0, 0, "rgba(240, 46, 170, 0.2)", false),
                addShadows(-20, 20, 0, 0, "rgba(240, 46, 170, 0.1)", false),
                addShadows(-25, 25, 0, 0, "rgba(240, 46, 170, 0.05)", false),
              ]);
              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#000",
                width: 200,
                height: 200,
              });
            }}
            className="span span2"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 25, 50, -12, "rgba(0, 0, 0, 0.25)", false),
              ]);
              setBoxStyles({
                radius: 100,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 6,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span3"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 10, 20, 0, "rgba(0, 0, 0, 0.19)", false),
                addShadows(0, 6, 6, 0, "rgba(0, 0, 0, 0.23)", false),
              ]);

              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#000",
                width: 200,
                height: 200,
              });
            }}
            className="span span4"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 30, 60, -12, "rgba(50, 50, 93, 0.25)", true),
                addShadows(0, 18, 36, -18, "rgba(0, 0, 0, 0.3)", true),
              ]);
              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span5"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 1, 2, 0, "rgba(60, 64, 67, 0.3)", false),
                addShadows(0, 1, 3, 1, "rgba(60, 64, 67, 0.15)", true),
              ]);
              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span6"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 0, 0, 2, "blue", true),
                addShadows(10, -10, 0, -3, "rgb(255, 255, 255)", false),
                addShadows(10, -10, 0, 0, "rgb(31, 193, 27)", false),
                addShadows(20, -20, 0, -3, "rgb(255, 255, 255)", false),
                addShadows(20, -20, 0, 0, "rgb(255, 217, 19)", false),
                addShadows(30, -30, 0, -3, "rgb(255, 255, 255)", false),
                addShadows(30, -30, 0, 0, "rgb(255, 156, 85)", false),
                addShadows(40, -40, 0, -3, "rgb(255, 255, 255)", false),
                addShadows(40, -40, 0, 0, "rgb(255, 85, 85", false),
              ]);
              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span7"
          ></span>
          <span
            onClick={() => {
              setShadows([
                addShadows(0, 0, 0, 3, "rgb(85, 91, 255)", false),
                addShadows(0, 0, 0, 6, "rgb(31, 193, 27)", false),
                addShadows(0, 0, 0, 9, "rgb(255, 217, 19)", false),
                addShadows(0, 0, 0, 12, "rgb(255, 156, 85)", false),
                addShadows(0, 0, 0, 15, "rgb(255, 85, 85)", false),
              ])
              ;
              setBoxStyles({
                radius: 20,
                color1: "#fff",
                color2: "#fff",
                bgColor: "#e0e6ff",
                borderPx: 0,
                borderType: "solid",
                borderColor: "#fff",
                width: 200,
                height: 200,
              });
            }}
            className="span span8"
          ></span>
        </div>
      </section>

      <How />

      <footer>
        <img src={logo} alt="INTERESTING Plus - Logo" />
        <h2>INTERESTING Plus</h2>
        <p>
          <a href="https://jatinporiya.netlify.app">Jatin Poriya</a>
        </p>
      </footer>
    </>
  );
}

export default App;
