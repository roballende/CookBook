import { useState } from "react";

function FormNewRecipe({ user }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("")
  const [directions, setDirections] = useState("")
  const [ing1, setIng1] = useState("")
  const [ing2, setIng2] = useState("")
  const [ing3, setIng3] = useState("")
  const [ing4, setIng4] = useState("")
  const [ing5, setIng5] = useState("")
  const [ing6, setIng6] = useState("")
  const [ing7, setIng7] = useState("")
  const [ing8, setIng8] = useState("")
  const [ing9, setIng9] = useState("")
  const [ing10, setIng10] = useState("")
  const [ing11, setIng11] = useState("")
  const [ing12, setIng12] = useState("")
  const [ing13, setIng13] = useState("")
  const [ing14, setIng14] = useState("")
  const [ing15, setIng15] = useState("")
  const [ing16, setIng16] = useState("")
  const [ing17, setIng17] = useState("")
  const [ing18, setIng18] = useState("")
  const [ing19, setIng19] = useState("")
  const [ing20, setIng20] = useState("")
  const [meas1, setMeas1] = useState("")
  const [meas2, setMeas2] = useState("")
  const [meas3, setMeas3] = useState("")
  const [meas4, setMeas4] = useState("")
  const [meas5, setMeas5] = useState("")
  const [meas6, setMeas6] = useState("")
  const [meas7, setMeas7] = useState("")
  const [meas8, setMeas8] = useState("")
  const [meas9, setMeas9] = useState("")
  const [meas10, setMeas10] = useState("")
  const [meas11, setMeas11] = useState("")
  const [meas12, setMeas12] = useState("")
  const [meas13, setMeas13] = useState("")
  const [meas14, setMeas14] = useState("")
  const [meas15, setMeas15] = useState("")
  const [meas16, setMeas16] = useState("")
  const [meas17, setMeas17] = useState("")
  const [meas18, setMeas18] = useState("")
  const [meas19, setMeas19] = useState("")
  const [meas20, setMeas20] = useState("")
  const [createdRecipe, setCreatedRecipe] = useState([])
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image, 
        category, 
        origin, 
        directions, 
        ing1, 
        ing2, 
        ing3, 
        ing4, 
        ing5, 
        ing6, 
        ing7, 
        ing8, 
        ing9, 
        ing10, 
        ing11, 
        ing12, 
        ing13, 
        ing14, 
        ing15, 
        ing16, 
        ing17, 
        ing18, 
        ing19, 
        ing20, 
        meas1, 
        meas2, 
        meas3, 
        meas4, 
        meas5, 
        meas6, 
        meas7, 
        meas8, 
        meas9, 
        meas10, 
        meas11, 
        meas12, 
        meas13, 
        meas14, 
        meas15, 
        meas16, 
        meas17, 
        meas18, 
        meas19, 
        meas20,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((recipe) => setCreatedRecipe(recipe));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
        <h2>Your New Recipe</h2>
        <form onSubmit={handleSubmit}>
        
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
        
            <label htmlFor="category">Select your recipe's category</label>
                <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Miscellaneous">-Please select best fit-</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Starter">Starter</option>
                    <option value="Side">Side</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Pork">Pork</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Goat">Goat</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Miscellaneous">Misc</option>
                </select>
        
            <label htmlFor="origin">Origin</label>
            <input
              type="text"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />

            <label htmlFor="directions">Directions</label>
            <textarea
              type="text"
              id="directions"
              value={directions}
              onChange={(e) => setDirections(e.target.value)}
            />

            <label htmlFor="ing1">Ingredient#1</label>
            <input
              type="text"
              id="ing1"
              value={ing1}
              onChange={(e) => setIng1(e.target.value)}
            />

            <label htmlFor="ing2">Ingredient#2</label>
            <input
              type="text"
              id="ing2"
              value={ing2}
              onChange={(e) => setIng2(e.target.value)}
            />

            <label htmlFor="ing3">Ingredient#3</label>
            <input
              type="text"
              id="ing3"
              value={ing3}
              onChange={(e) => setIng3(e.target.value)}
            />

            <label htmlFor="ing4">Ingredient#4</label>
            <input
              type="text"
              id="ing4"
              value={ing4}
              onChange={(e) => setIng4(e.target.value)}
            />

            <label htmlFor="ing5">Ingredient#5</label>
            <input
              type="text"
              id="ing5"
              value={ing5}
              onChange={(e) => setIng5(e.target.value)}
            />

            <label htmlFor="ing6">Ingredient#6</label>
            <input
              type="text"
              id="ing6"
              value={ing6}
              onChange={(e) => setIng6(e.target.value)}
            />

            <label htmlFor="ing7">Ingredient#7</label>
            <input
              type="text"
              id="ing7"
              value={ing7}
              onChange={(e) => setIng7(e.target.value)}
            />

            <label htmlFor="ing8">Ingredient#8</label>
            <input
              type="text"
              id="ing8"
              value={ing8}
              onChange={(e) => setIng8(e.target.value)}
            />

            <label htmlFor="ing9">Ingredient#9</label>
            <input
              type="text"
              id="ing9"
              value={ing9}
              onChange={(e) => setIng9(e.target.value)}
            />

            <label htmlFor="ing10">Ingredient#10</label>
            <input
              type="text"
              id="ing10"
              value={ing10}
              onChange={(e) => setIng10(e.target.value)}
            />

            <label htmlFor="ing11">Ingredient#11</label>
            <input
              type="text"
              id="ing11"
              value={ing11}
              onChange={(e) => setIng11(e.target.value)}
            />

            <label htmlFor="ing12">Ingredient#12</label>
            <input
              type="text"
              id="ing12"
              value={ing12}
              onChange={(e) => setIng12(e.target.value)}
            />

            <label htmlFor="ing13">Ingredient#13</label>
            <input
              type="text"
              id="ing13"
              value={ing13}
              onChange={(e) => setIng13(e.target.value)}
            />

            <label htmlFor="ing14">Ingredient#14</label>
            <input
              type="text"
              id="ing14"
              value={ing14}
              onChange={(e) => setIng14(e.target.value)}
            />

            <label htmlFor="ing15">Ingredinet#15</label>
            <input
              type="text"
              id="ing15"
              value={ing15}
              onChange={(e) => setIng15(e.target.value)}
            />

            <label htmlFor="ing16">Ingredient#16</label>
            <input
              type="text"
              id="ing16"
              value={ing16}
              onChange={(e) => setIng16(e.target.value)}
            />

            <label htmlFor="ing17">Ingredient#17</label>
            <input
              type="text"
              id="ing17"
              value={ing17}
              onChange={(e) => setIng17(e.target.value)}
            />

            <label htmlFor="ing18">Ingredient#18</label>
            <input
              type="text"
              id="ing18"
              value={ing18}
              onChange={(e) => setIng18(e.target.value)}
            />

            <label htmlFor="ing19">Ingredient#19</label>
            <input
              type="text"
              id="ing19"
              value={ing19}
              onChange={(e) => setIng19(e.target.value)}
            />

            <label htmlFor="ing20">Ingredient#20</label>
            <input
              type="text"
              id="ing20"
              value={ing20}
              onChange={(e) => setIng20(e.target.value)}
            />

            <label htmlFor="meas1">Measurement#1</label>
            <input
              type="text"
              id="meas1"
              value={meas1}
              onChange={(e) => setMeas1(e.target.value)}
            />

            <label htmlFor="meas2">Measurement#2</label>
            <input
              type="text"
              id="meas2"
              value={meas2}
              onChange={(e) => setMeas2(e.target.value)}
            />

            <label htmlFor="meas3">Measurement#3</label>
            <input
              type="text"
              id="meas3"
              value={meas3}
              onChange={(e) => setMeas3(e.target.value)}
            />

            <label htmlFor="meas4">Measurement#4</label>
            <input
              type="text"
              id="meas4"
              value={meas4}
              onChange={(e) => setMeas4(e.target.value)}
            />

            <label htmlFor="meas5">Measurement#5</label>
            <input
              type="text"
              id="meas5"
              value={meas5}
              onChange={(e) => setMeas5(e.target.value)}
            />

            <label htmlFor="meas6">Measurement#6</label>
            <input
              type="text"
              id="meas6"
              value={meas6}
              onChange={(e) => setMeas6(e.target.value)}
            />

            <label htmlFor="meas7">Measurement#7</label>
            <input
              type="text"
              id="meas7"
              value={meas7}
              onChange={(e) => setMeas7(e.target.value)}
            />

            <label htmlFor="meas8">Measurement#8</label>
            <input
              type="text"
              id="meas8"
              value={meas8}
              onChange={(e) => setMeas8(e.target.value)}
            />

            <label htmlFor="meas9">Measurement#9</label>
            <input
              type="text"
              id="meas9"
              value={meas9}
              onChange={(e) => setMeas9(e.target.value)}
            />

            <label htmlFor="meas10">Measurement#10</label>
            <input
              type="text"
              id="meas10"
              value={meas10}
              onChange={(e) => setMeas10(e.target.value)}
            />

            <label htmlFor="meas11">Measurement#11</label>
            <input
              type="text"
              id="meas11"
              value={meas11}
              onChange={(e) => setMeas11(e.target.value)}
            />

            <label htmlFor="meas12">Measurement#12</label>
            <input
              type="text"
              id="meas12"
              value={meas12}
              onChange={(e) => setMeas12(e.target.value)}
            />

            <label htmlFor="meas13">Measurement#13</label>
            <input
              type="text"
              id="meas13"
              value={meas13}
              onChange={(e) => setMeas13(e.target.value)}
            />

            <label htmlFor="meas14">Measurement#14</label>
            <input
              type="text"
              id="meas14"
              value={meas14}
              onChange={(e) => setMeas14(e.target.value)}
            />

            <label htmlFor="meas15">Measurement#15</label>
            <input
              type="text"
              id="meas15"
              value={meas15}
              onChange={(e) => setMeas15(e.target.value)}
            />

            <label htmlFor="meas16">Measurement#16</label>
            <input
              type="text"
              id="meas16"
              value={meas16}
              onChange={(e) => setMeas16(e.target.value)}
            />

            <label htmlFor="meas17">Measurement#17</label>
            <input
              type="text"
              id="meas17"
              value={meas17}
              onChange={(e) => setMeas17(e.target.value)}
            />

            <label htmlFor="meas18">Measurement#18</label>
            <input
              type="text"
              id="meas18"
              value={meas18}
              onChange={(e) => setMeas18(e.target.value)}
            />

            <label htmlFor="meas19">Measurement#19</label>
            <input
              type="text"
              id="meas19"
              value={meas19}
              onChange={(e) => setMeas19(e.target.value)}
            />

            <label htmlFor="meas20">Measurement#20</label>
            <input
              type="text"
              id="meas20"
              value={meas20}
              onChange={(e) => setMeas20(e.target.value)}
            />
          
        
            <button color="primary" type="submit">{"Publish Recipe"}</button>
          
        
            {errors.map((err) => (
              <error key={err}>{err}</error>
            ))}
          
        </form>

        <p>
            {createdRecipe}
        </p>
    </>
  );
}


export default FormNewRecipe;