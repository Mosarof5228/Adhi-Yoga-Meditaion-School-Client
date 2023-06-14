// import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { AuthContext } from "../../../providers/AuthProvider";


// const img_hosting_token = import.meta.env.VITE_IMAGE_KEY;

// const AddaClass = () => {
//     const { user } = useContext(AuthContext);
//     console.log(user);
//     const [axiosSecure] = useAxiosSecure();
//     const { register, handleSubmit, reset } = useForm();

//     const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

//     const onSubmit = data => {
//         console.log(data);
//         const formData = new FormData();
//         const image = data.classImage[0]
//         formData.append('image', image)
//         console.log(image);

//         fetch(image_hosting_url, {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(image => {
//                 console.log(image);
//                 if (image.success) {
//                     const imgURL = image.data.display_url;
//                     const { availableSeats, className, instructorEmail, instructorName, price, } = data;
//                     const classes = { className, price: parseFloat(price), instructorEmail, classImage: imgURL, seats: parseInt(availableSeats), instructorName, status: 'pending', totalStudent: 0 }

//                     axiosSecure.post('/classes', classes)
//                         .then(data => {
//                             reset();
//                             if (data.data.insertedId) {
//                                 alert('successfully add an class')
//                             }
//                         })
//                 }
//             })
//     }
//     return (
//         <div className="w-full px-10">
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <label className="label">
//                         <span className="label-text">Class Name*</span>
//                     </label>
//                     <input type="text" placeholder="Class Name"
//                         {...register("className", { required: true })}
//                         className="input input-bordered w-full " />
//                 </div>
//                 <div className='flex gap-3 items-center'>
//                     <div className='w-full'>
//                         <label className="label">
//                             <span className="label-text">Instructor Name*</span>
//                         </label>
//                         <input type="text" value={user?.displayName}
//                             {...register("instructorName", { required: true })}
//                             className="input input-bordered w-full " />
//                     </div>
//                     <div className='w-full'>
//                         <label className="label">
//                             <span className="label-text">Instructor Email*</span>
//                         </label>
//                         <input type="text" value={user?.email}
//                             {...register("instructorEmail", { required: true })}
//                             className="input input-bordered w-full " />
//                     </div>
//                 </div>
//                 <div className="flex gap-3 my-5">
//                     <div className="w-full">
//                         <label className="label">
//                             <span className="label-text">Available seats*</span>
//                         </label>
//                         <input type="number"
//                             {...register("availableSeats", { required: true })}
//                             placeholder="Available seats" className="input input-bordered w-full " />
//                     </div>
//                     <div className="w-full">
//                         <label className="label">
//                             <span className="label-text">Price*</span>
//                         </label>
//                         <input type="number"
//                             {...register("price", { required: true })}
//                             placeholder="Price" className="input input-bordered w-full " />
//                     </div>
//                 </div>

//                 <div className="form-control w-full mt-5">
//                     <label className="label">
//                         <span className="label-text">Class Image*</span>
//                     </label>
//                     <input type="file"
//                         {...register("classImage", { required: true })}
//                         className="file-input file-input-bordered w-full " />
//                 </div>
//                 <input className="btn btn-sm mt-5" type="submit" value="Add Class" />
//             </form>
//         </div>
//     );
// };

// export default AddaClass;


import React from 'react';

const AddAClass = () => {
    return (
        <div>
            <h2 className='text-5xl'>hi add a class</h2>
        </div>
    );
};

export default AddAClass;