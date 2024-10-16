import mongoose, { Schema } from "mongoose";

const subscrpitionSchema = new Schema({
subcriber: {
    type: Schema.Types.ObjectId,
   // one who is subscribing
   ref: "User"
},
channel: {
    type: Schema.Types.ObjectId,
    ref: "User"
}

},
{
    timestamps: true
}
)