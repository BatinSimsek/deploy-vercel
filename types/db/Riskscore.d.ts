import {Document, ObjectId} from "mongodb";
import {Neighborhood} from "@/types/db/Neighborhood";

export interface Riskscore extends Document {
    overlast: string
    gebruikersNaam: string
    risicoScore: number
    neighborhoodId: ObjectId;
}