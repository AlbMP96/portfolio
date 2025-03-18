'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Wave } from '@/components/Wave';
import { MorphingText } from '@/components/magicui/morphing-text';
import { Particles } from '@/components/magicui/particles';
import { IconCloud } from '@/components/magicui/icon-cloud';

const slugs = [
    'typescript',
    'javascript',
    'java',
    'react',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'postgresql',
    'nginx',
    'vercel',
    'docker',
    'git',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'vuedotjs',
    'symphony',
    'laravel',
    'linux',
    'tailwindcss',
    'bootstrap',
];

export default function Home() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState('#ffffff');

    useEffect(() => {
        setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000');
    }, [resolvedTheme]);

    const texts = ['Alberto', 'desarrollador'];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <div className="items-center justify-items-center h-screen font-[family-name:var(--font-geist-sans)] overflow-y-scroll snap-y snap-mandatory">
            <Particles
                className="absolute inset-0 z-0"
                quantity={200}
                ease={80}
                color={color}
                refresh
            />
            <div id="banner" className="h-screen snap-always snap-center">
                <div className="h-full flex flex-col items-start text-center justify-center p-10">
                    <p className="text-[6rem] font-bold [filter:url(#threshold)_blur(0.6px)]">
                        Hola <Wave />
                    </p>
                    <p className="text-[6rem] font-bold [filter:url(#threshold)_blur(0.6px)]">
                        Soy
                    </p>
                    <div className="flex flex-row items-start">
                        <MorphingText texts={texts} />
                    </div>
                </div>
            </div>
            <div id="about" className="snap-always snap-center">
                <div className="h-screen flex flex-row items-center">
                    <div>
                        <h1>Sobre mi</h1>
                        <p>
                            Mauris ac lectus eu justo blandit semper. Quisque at
                            urna tincidunt, venenatis augue id, elementum diam.
                            Donec mollis molestie lobortis. Morbi sollicitudin
                            ante in felis iaculis, nec porttitor justo
                            elementum. Nullam feugiat erat non ante tincidunt
                            efficitur. Donec ut diam condimentum ante pulvinar
                            convallis vitae a lectus. Nulla blandit fermentum
                            dolor nec tincidunt. Etiam non suscipit nunc.
                            Curabitur vitae lorem in odio accumsan auctor id ut
                            nisi. Vivamus dignissim, erat quis consectetur
                            pellentesque, felis erat ultrices tortor, sed
                            hendrerit augue risus in nisi. Vivamus dignissim,
                            lectus quis fermentum suscipit, mi lectus convallis
                            eros, vel rhoncus libero lorem ultricies ligula.
                            Vivamus sit amet finibus turpis. Nam urna orci,
                            sagittis vitae aliquet ut, rhoncus eu ligula. Cras
                            nunc felis, pellentesque non odio eu, euismod
                            porttitor ipsum. Pellentesque facilisis porttitor
                            diam sit amet porta. Vestibulum pellentesque sem
                            eros, ut scelerisque elit aliquam in. Proin rutrum
                            ante nisl, eu scelerisque mi tincidunt id. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam tempus at massa non suscipit. Fusce eget
                            sagittis felis. Quisque facilisis tempus tortor.
                            Aliquam aliquet leo eu tellus posuere consectetur.
                            Fusce ex risus, bibendum sit amet lacinia quis,
                            tempus sit amet mi. Pellentesque iaculis justo nec
                            pellentesque fringilla. Aliquam ac massa eu turpis
                            scelerisque ullamcorper quis sit amet enim. Nulla
                            tristique eget nisl fringilla consectetur. Nam
                            mollis ligula sit amet diam sagittis, in fermentum
                            leo accumsan. Pellentesque mattis ac sapien non
                            varius. Mauris dignissim dapibus diam, in dictum
                            felis pulvinar sit amet. Sed ultrices orci at
                            sagittis scelerisque. Phasellus eu justo porta,
                            sollicitudin nulla id, dictum elit. Vestibulum a
                            lectus suscipit, tempus lorem dignissim, eleifend
                            mi. Maecenas eget sapien elit. Praesent efficitur
                            ante ut consectetur feugiat. In lacinia, quam id
                            rutrum luctus, tortor lectus suscipit velit, a
                            imperdiet elit elit sed enim. Donec efficitur, mi
                            sit amet semper aliquet, purus ipsum tempor tortor,
                            vitae tempus libero tellus at metus. Aliquam
                            volutpat libero sit amet lorem tincidunt placerat id
                            eu neque. Proin tincidunt vel nibh ac aliquet.
                            Praesent a est vel quam mollis maximus. Nullam
                            tempor quam sapien, efficitur lacinia ante pretium
                            in. Maecenas id dapibus nulla. Duis at dignissim
                            massa, id aliquam purus. Nam id tempor felis, ut
                            lobortis nisl. Phasellus interdum leo sed nibh
                            ultrices fringilla. Aliquam sit amet odio at metus
                            bibendum finibus. Donec sed nisi lorem. Pellentesque
                            habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Nullam
                            pellentesque egestas fermentum. Mauris volutpat dui
                            in dolor euismod consectetur. Donec aliquet sagittis
                            velit sed tincidunt. Proin tincidunt nibh quis justo
                            blandit, sed fringilla massa sagittis. Praesent ut
                            metus varius, porta orci vitae, pharetra sapien.
                            Aliquam ante ante, imperdiet a sodales ac, sodales
                            non urna. Sed finibus nunc arcu, sit amet dictum est
                            ultricies ac. Quisque id tortor ac dolor euismod
                            condimentum at at leo. Nunc laoreet ullamcorper
                            arcu, quis sodales elit tristique eget. Vivamus eget
                            nisi at ex vehicula cursus quis eu elit.
                        </p>
                        <div className="relative flex size-full items-center justify-center overflow-hidden">
                            <IconCloud images={images} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="projects" className="snap-always snap-center">
                <div className="h-screen">projects</div>
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                {/* <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a> */}
            </footer>
        </div>
    );
}
