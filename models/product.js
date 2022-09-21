import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        jobTitle: {
            type: String,
        },
        companyLogo: {
            type: String,
        },
        companyTitle: {
            type: String,
        },
        companyLocation: {
            type: String,
        },
        companyEstablish: {
            type: String,
        },
        companySize: {
            type: [
                {
                    min: {
                        type: Number,
                        required: true
                    },
                    max: {
                        type: Number,
                        required: true
                    },
                },
            ],
        },
        // companySize: {
        //     type: Number,
        //     min: 0,
        //     max: 5
        // },
        companyEmail: {
            type: String,
        },
        companyUrl: {
            type: String,
        },
        desc: {
            type: String,
        },
        country: {
            type: String,
        },
        industry: {
            type: String,
        },
        postedTime: {
            type: String,
        },
        salary: {
            type: [
                {
                    min: {
                        type: Number,
                        required: true
                    },
                    max: {
                        type: Number,
                        required: true
                    },
                },
            ],
        },
        jobType: {
            type: String,
        },
        hourlyRate: {
            type: Number,
            required: true
        },
        jobLevel: {
            type: String,
        },
        experience: {
            type: Number,
        },
        deadline: {
            type: String,
        },
        position: {
            type: String,
        },
        onsiteRemote: {
            type: String,
        },
        tags: {
            type: [
                {
                    type: String,
                    required: true
                },
            ],
        },
        skills: {
            type: [
                {
                    type: String,
                    required: true
                },
            ],
        },
        featured: {
            type: Boolean,
        },
        trending: {
            type: Boolean,
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


