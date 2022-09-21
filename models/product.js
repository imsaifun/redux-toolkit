import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            // maxlength: 60,
        },
        desc: {
            type: String,
            required: true,
            // maxlength: 200,
        },
        img: {
            type: String,
            required: true,
        },
        // rating: {
        //     type: Number,
        //     min: 0,
        //     max: 5
        // },
        // prices: {
        //     type: [
        //         {
        //             text: {
        //                 type: String,
        //                 required: true
        //             },
        //             price: {
        //                 type: Number,
        //                 required: true
        //             },
        //         },
        //     ],
        // },
        // extraOptions: {
        //     type: [
        //         {
        //             text: {
        //                 type: String,
        //                 required: true
        //             },
        //             price: {
        //                 type: Number,
        //                 required: true
        //             },
        //         },
        //     ],
        // },
    },
    { timestamps: true }
);

export default mongoose.models.Products || mongoose.model('Products', ProductSchema);


