// route.ts in folder api
import { NextResponse } from "next/server";
import { words } from "@/data/words";
 
export async function GET() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];
  console.log('FoDo was here...');  
  return NextResponse.json({ data: word });
}