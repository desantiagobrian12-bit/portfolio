"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionShapes from "@/components/SectionShapes";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export type SoundtrackItem = {
  title: string;
  artist: string;
  imageUrl: string | null;
};

export default function AboutContent({
  soundtracks,
}: {
  soundtracks: SoundtrackItem[];
}) {
  return (
    <main>
      {/* Intro — dictionary-style + photo */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <SectionShapes section="aboutMe" />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeIn}>
              <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                Definition of
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
                Brian De Santiago
              </h1>

              <dl className="mt-8 space-y-4 text-secondary">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-primary">
                    noun
                  </dt>
                  <dd className="mt-1.5 text-base leading-relaxed">
                    1. A designer who likes turning messy, complex systems into
                    experiences that make sense.
                  </dd>
                  <dd className="mt-1 text-base leading-relaxed">
                    2. Structure and creativity in one person. Industrial design
                    background, formula brain, then learned to think differently.
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-primary">
                    adjective
                  </dt>
                  <dd className="mt-1.5 text-base leading-relaxed">
                    1. Detail-oriented. Believes small things compound.
                  </dd>
                  <dd className="mt-1 text-base leading-relaxed">
                    2. Chill, easy to talk to, doesn&apos;t take himself too
                    seriously.
                  </dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-secondary/10"
            >
              <Image
                src="/images/profile.png"
                alt="Brian De Santiago"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* My story */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                My story
              </h2>
              <p className="mt-6 leading-relaxed text-secondary">
                I studied Industrial Design at Tec de Monterrey. I was never
                the &quot;creative kid.&quot; I was more of a formula person,
                following structures and systems. At some point that felt too
                easy, and I started forcing my mind to think differently. That
                shift changed everything. The tension between structure and
                creativity is what makes me the designer I am today.
              </p>
              <p className="mt-4 leading-relaxed text-secondary">
                I believe small things can have a big impact. In design, a tiny
                UX fix can change how thousands of people experience a product.
                In life, small decisions compound into something much bigger
                than you&apos;d expect. That idea drives most of what I do.
              </p>
              <p className="mt-4 leading-relaxed text-secondary">
                I&apos;m based in Guadalajara. Great food, great culture, great
                people, and a growing tech scene that still has soul. I&apos;m
                open to remote work worldwide, or to packing my bags and moving
                somewhere new.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-secondary/10"
            >
              <Image
                src="/images/about/story.png"
                alt="Iced coffee and a moment in the lobby"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soundtracks */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                Soundtracks
              </h2>
              <p className="mt-4 leading-relaxed text-secondary">
                A good playlist is part of how I work. These are some of the
                albums or songs that have been on repeat lately. House, jazz,
                corridos, R&B, whatever fits the mood.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {soundtracks.map((album, i) => (
                <div
                  key={i}
                  className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/20 hover:bg-secondary/5"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded bg-secondary/20">
                    {album.imageUrl ? (
                      <Image
                        src={album.imageUrl}
                        alt={`${album.title} by ${album.artist}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm font-medium text-primary">
                    {album.title}
                  </p>
                  <p className="mt-0.5 text-xs text-secondary">{album.artist}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
