import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWaitlistUser extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const WaitlistUserSchema = new Schema<IWaitlistUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model recompilation in development
const WaitlistUser: Model<IWaitlistUser> =
  mongoose.models.WaitlistUser || mongoose.model<IWaitlistUser>('WaitlistUser', WaitlistUserSchema);

export default WaitlistUser;
