import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavigBar from '../components/NavigBar';

export const Recipe = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState()

    useEffect(() => {
        fetch(`/recipes/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          }).then((r) => {
            if (r.ok) {
              r.json().then((recipe) => {
                setRecipe(recipe)
              });
            }
          });
    }, [id])
    
   
    console.log('recipe', recipe)

  return (
    <>
        <NavigBar />
        <div className="p-6 form-recipe form-top">
            {recipe && <>
                <h1 className="text-3xl text-center py-8">{recipe.title}</h1>
                {recipe.image ? 
                    (<img className='w-64 m-auto' src={recipe.image} alt={recipe.title}/>) :
                    (<img className='w-64 m-auto' src='/img/icon-default-recipe.svg' alt={recipe.title}/>) 
                }

                <div className='row'>
                    <label>Category: </label>
                    <span>{recipe.category}</span>
                </div>

                <div className='row'>
                    <label>Origin: </label>
                    <span>{recipe.origin}</span>
                </div>

                <div className='row'>
                    <label>Directions: </label>
                    <span>{recipe.directions}</span>
                </div>
                
                <div className='columns-2'>
                    <div className="bg-black text-white p-2">Ingredients</div>
                    
                    <div className='row'>
                        <span>{recipe.ing1}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing2}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing3}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing4}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing5}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing6}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing7}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing8}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing9}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing10}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing11}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing12}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing13}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing14}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing15}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing16}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing17}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing18}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing19}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.ing20}</span>
                    </div>

                    <div className="bg-black text-white p-2">Measurements</div>
                    <div className='row'>
                        <span>{recipe.meas1}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas2}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas3}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas4}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas5}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas6}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas7}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas8}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas9}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas10}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas11}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas12}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas13}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas14}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas15}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas16}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas17}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas18}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas19}</span>
                    </div>
                    <div className='row'>
                        <span>{recipe.meas20}</span>
                    </div>
                </div>
                </>
            }
        </div>
    </>
   
  )
}
