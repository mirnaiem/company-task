const DesignPant = () => {
 return (
   <div className="w-[1000px] mx-auto my-12">
     <div className="my-12">
       <h2>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
         excepturi optio maiores doloribus nostrum? Nostrum adipisci ipsum qui,
         iusto sint esse quisquam non repudiandae delectus, at odio nulla vitae
         corporis doloremque dolores et sapiente consequuntur. Cum quis
         expedita illo aspernatur consequatur quia delectus suscipit dolore
         quam vel tempore, totam provident laudantium. Nemo magnam quam omnis
         eligendi libero, delectus blanditiis dolorum ut, earum sunt voluptas
         ipsa voluptate et. Dicta accusantium voluptates nemo vel, nesciunt
         ipsam. Iusto omnis, eligendi rem illum ipsum necessitatibus
         exercitationem reiciendis, vero alias animi neque commodi fuga. Est
         enim qui in, sequi facere quae natus blanditiis consequatur minus.
       </h2>
     </div>
     <div className="mt-60 relative">
       <div className="my-12 grid lg:grid-cols-3 ">
         <div></div>
         <div className="bg-gray-400 rounded-full py-16 absolute top-1 w-[400px] ms-20">
           <img
             className="p-12 rounded-full"
             src="https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg"
             alt=""
           />
         </div>
         <div className=" "></div>
         <div className=" flex gap-4 bg-green-400">
           <div>
             <h2>this is the best bant </h2>
             <h2>this is the best bant </h2>
             <h2>this is the best bant </h2>
             <h2>this is the best bant </h2>
           </div>
           <div>
             <h2>this is the best bant </h2>
             <h2>this is the best bant </h2>
             <h2>this is the best bant </h2>
           </div>
         </div>
       </div>
     </div>
     <div className="my-12 bg-gray-700 h-[800px] ">
       <div className="py-44 mx-auto">
         <h1 className="text-center text-[250px] font-bold text-gray-100">
           DENIM
         </h1>
         <div className="text-center">
           <button className="btn btn-success">Order Now</button>
         </div>
       </div>
       <div></div>
     </div>
     <div className="flex  mx-auto">
       <div className="text-center">
         <img
           className="w-1/2 mx-auto"
           src="https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg"
           alt=""
         />
         <button className=" btn px-16 btn-success customize">
           See Details
         </button>
       </div>
       <div className="text-center">
         <img
           className="w-1/2 mx-auto"
           src="https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg"
           alt=""
         />
         <button className=" btn px-16 btn-success customize">
           See Details
         </button>
       </div>
       <div className="text-center">
         <img
           className="w-1/2 mx-auto"
           src="https://cdn.britannica.com/74/190774-050-52CE5745/jeans-denim-pants-clothing.jpg"
           alt=""
         />
         <button className=" btn px-16 btn-success customize">
           See Details
         </button>
       </div>
     </div>
   </div>
 );
};

export default DesignPant;
