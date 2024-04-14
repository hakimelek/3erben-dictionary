/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/sH0KFa5RqQX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Rethink_Sans } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

rethink_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import SideBar from "./sidebar";
import WordCard from "./wordcard";

const words = [
  {
    name: "3erben",
    definition: 'The Tunisian word for "inheritance".',
    exampleSentences: [
      "I will inherit my father's 3erben when he passes away.",
      "In Tunisia, 3erben is a very important concept in the society.",
    ],
    likes: 15,
    dislikes: 5,
  },
  {
    name: "Chbik",
    definition: 'The Tunisian word for "money".',
    exampleSentences: [
      "I need to save my chbik to buy a new phone at the end of the month.",
      "In Tunisia, people often use the word chbik to refer to money.",
    ],
    likes: 15,
    dislikes: 5,
  },
  {
    name: "Weld el 9a7ba",
    definition: 'The Tunisian word for "son of a bitch".',
    likes: 0,
    dislikes: 0,
  },
];

export default function Home() {
  return (
    <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col gap-2">
        <SideBar />
      </div>
      <div className="flex flex-col gap-4">
        {words.map((word) => {
          return <WordCard key={word.name} word={word} />;
        })}
      </div>
    </div>
  );
}
