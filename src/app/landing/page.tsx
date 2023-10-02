'use client'
import { useEffect } from 'react'

import * as global_components from '@/components/global'
import * as components from '@/components'
import * as hooks from '@/hooks'

import smiley from '@/assets/smiley.svg'
import peanutman_cheering from '@/assets/peanutman-cheering.svg'
import peanutman_presenting from '@/assets/peanutman-presenting.svg'

import scroll_logo from '@/assets/partners/scroll.png'
import ambire_logo from '@/assets/partners/ambire-logo-black.svg'
import givepraise from '@/assets/partners/icon_praise_round.png'
import eco_logo from '@/assets/partners/eco-long.svg'
import smiley2 from '@/assets/smile.svg'
import case_study from '@/assets/casestudy.svg'
import message from '@/assets/message.svg'
import airdrop from '@/assets/airdrop.svg'
import shield from '@/assets/shield.svg'
import Link from 'next/link'

export default function landing() {
    return (
        <global_components.PageWrapper>
            <section className="lg:divide-y" id="hero">
                <div className="relative mx-auto">
                    <div className="lg:grid lg:grid-flow-col-dense lg:grid-cols-2">
                        <div className="brutalborder bg-yellow pb-16 pt-16 text-center sm:px-6 lg:mx-0 lg:max-w-none lg:px-0">
                            <h1 className="mx-auto my-8 w-3/4 text-5xl font-black">Send crypto with a link</h1>
                            <p className="m-4 mx-auto w-2/3 p-2 text-2xl">
                                Forget about wallet addresses and confirming transactions. Simply send a link.
                            </p>
                            <Link
                                id="cta-btn"
                                type="submit"
                                className="mx-auto mb-2 mt-8 block bg-white p-5 text-2xl font-black no-underline md:w-3/5 lg:w-1/3  "
                                href={'/send'}
                            >
                                Send crypto
                            </Link>
                        </div>
                        <div className="center-xy brutalborder flex flex-row items-center justify-center gap-6 bg-fuchsia py-3 lg:pb-16 lg:pt-32 ">
                            <img src={peanutman_cheering.src} className="w-1/3" />
                            <div>
                                <span className="inline cursor-pointer text-6xl font-light italic">henlo! </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="logos" className="my-1 scale-50 justify-center bg-white py-4">
                <div role="list" className="mx-4 flex flex-wrap items-center justify-center gap-4 gap-y-1 sm:gap-y-4">
                    <div className="border-2 border-transparent p-2 text-center hover:border-black">
                        <a href="https://scroll.io" target="_blank">
                            <img
                                src={scroll_logo.src}
                                alt="logo scroll"
                                className="mx-auto h-14 bg-white p-3 opacity-50 saturate-0 hover:opacity-100 hover:saturate-100 sm:h-20 "
                            />
                        </a>
                    </div>

                    <div className="border-2 border-transparent p-2 text-center hover:border-black">
                        <a href="https://ambire.com/" target="_blank">
                            <img
                                src={ambire_logo.src}
                                alt="logo ambire"
                                className="mx-auto h-14 bg-white p-2 opacity-50 saturate-0 hover:opacity-100 hover:saturate-100 sm:h-20 "
                            />
                        </a>
                    </div>

                    <div className="border-2 border-transparent p-2 text-center hover:border-black">
                        <a href="https://givepraise.xyz" target="_blank">
                            <img
                                src={givepraise.src}
                                alt="logo givepraise"
                                className="mx-auto h-14 bg-white p-2 opacity-50 saturate-0 hover:opacity-100 hover:saturate-100 sm:h-20 "
                            />
                        </a>
                    </div>

                    <div className="border-2 border-transparent p-2 text-center hover:border-black">
                        <a href="https://eco.org" target="_blank">
                            <img
                                src={eco_logo.src}
                                alt="logo eco"
                                className="mx-auto h-14 bg-white p-4 opacity-50 saturate-0 hover:opacity-100 hover:saturate-100 sm:h-20 "
                            />
                        </a>
                    </div>
                </div>
            </section>

            <global_components.MarqueeWrapper backgroundColor="bg-black">
                <div className="mr-2 py-2 text-center font-black uppercase italic tracking-wide md:py-4 md:text-4xl ">
                    smiles
                </div>
                <img src={smiley.src} alt="logo" className=" mr-1 h-5 md:h-8" />
            </global_components.MarqueeWrapper>

            <section id="usecases">
                <div role="list" className="grid grid-cols-1 gap-0 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="brutalborder m-4 flex flex-col bg-teal p-8" id="frens">
                        <div className="flex-grow">
                            <img className="inline h-28 w-28 px-4 hover:invert" src={smiley2.src} alt="" />
                            <h3 className="text-5xl font-bold">Pay frens</h3>
                            <p className="mt-1 block text-2xl leading-loose">
                                Need to send some crypto to a fren? Don't waste time asking for their wallet address.
                                Just send them a link. They can pick up the funds whenever. You can even set an expiry
                                date, and you'll get your funds back (minus gas).
                            </p>
                        </div>

                        <div className="center-xy flex-end my-6 flex justify-around gap-12">
                            <a href="/cases#frens" hidden>
                                <button className="brutalborder brutalshadow p-4 text-lg font-bold hover:bg-red">
                                    <img className="inline h-8 px-4" src={case_study.src} alt="" />
                                    Case Study
                                </button>
                            </a>

                            <a href="https://discord.gg/MwAPcbjn" target="_blank">
                                <button className="brutalborder brutalshadow p-4 text-lg font-bold hover:bg-red">
                                    <img className="inline h-8 px-4" src={message.src} alt="" />
                                    Let's chat!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="brutalborder m-4 flex flex-col bg-red p-8" id="airdrops">
                        <div className="flex-grow">
                            <img className="inline h-28 w-28 px-4 hover:invert" src={airdrop.src} alt="" />
                            <h3 className="text-5xl font-bold">Airdrops & Bulk</h3>
                            <p className="mt-1 block flex-grow text-2xl leading-loose">
                                Need to send crypto or NFTs to a large group of people? No problem. Just send generate
                                links in bulk for your transactions. You'll be able to track who has claimed their
                                funds. Save time, and gas.
                            </p>
                        </div>

                        <div className="center-xy flex-end my-6 flex justify-around gap-12">
                            <a href="/cases#airdrops" hidden>
                                <button className="brutalborder brutalshadow p-4 text-lg font-bold hover:bg-teal">
                                    <img className="inline h-8 px-4" src={case_study.src} alt="case study icon" />
                                    Case Study
                                </button>
                            </a>

                            <a href="https://discord.gg/MwAPcbjn" target="_blank">
                                <button className="brutalborder brutalshadow p-4 text-lg font-bold hover:bg-teal">
                                    <img className="inline h-8 px-4" src={message.src} alt="message icon" />
                                    Let's chat!
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="brutalborder m-4 flex flex-col bg-lightblue p-8" id="privacy">
                        <div className="flex-grow">
                            <img className="inline h-28 w-28 px-4 hover:invert" src={shield.src} alt="" />
                            <h3 className="text-5xl font-bold">Privacy</h3>
                            <p className="mt-1 block text-2xl leading-loose">
                                Make transactions and decouple your wallet address from your identity. Send funds to
                                anyone without revealing your wallet address. No more spam, no more scams. We're not
                                CIA-proof, but we're are etherscan-proof.
                            </p>
                        </div>

                        <div className="center-xy flex-end my-6 flex justify-around gap-12">
                            <a href="/cases#privacy" hidden>
                                <button className="hover:bg-orange brutalborder brutalshadow p-4 text-lg font-bold">
                                    <img className="inline h-8 px-4" src={case_study.src} alt="case study icon" />
                                    Case study
                                </button>
                            </a>

                            <a href="https://discord.gg/MwAPcbjn" target="_blank">
                                <button className="brutalborder brutalshadow p-4 text-lg font-bold hover:bg-yellow">
                                    <img className="inline h-8 px-4" src={message.src} alt="message icon" />
                                    Let's chat!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:divide-y" id="explainer">
                <div className="relative mx-auto border-black">
                    <div className="lg:grid lg:grid-flow-col-dense lg:grid-cols-2">
                        <div className="center-xy brutalborder flex h-full w-full flex-row items-center justify-center gap-2 bg-fuchsia text-center text-base font-bold">
                            <img src={peanutman_presenting.src} className="bottom-0 left-0 w-4/5" />

                            <div className="mb-5">
                                <div className="mx-4 flex flex-col bg-fuchsia ">
                                    <a href="https://docs.peanut.to/integrations/contract-addresses" target="_blank">
                                        <button className="brutalborder brutalshadow bg-fuchsia p-2 px-4 hover:bg-yellow">
                                            smart contracts
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="center-xy brutalborder flex h-full w-full flex-row items-center justify-center gap-2 bg-yellow text-center text-base font-bold text-black">
                            <div className="mt-4 flex flex-col text-center ">
                                <ul className="inline-block p-8 text-left lg:px-32 lg:leading-loose">
                                    <span className="font-black"> Sending </span>
                                    <li> You deposit your money with the Peanut smart contract.</li>
                                    <li> This smart contract generates a secret link.</li>
                                    <li>
                                        {' '}
                                        You send the link however you like. Email, telegram, whatsapp, slap onto a
                                        billboard. We don't mind. Whoever has the link can claim the funds though, so
                                        maybe re-think the billboard thing.
                                    </li>
                                    <br />
                                    <span className="mt-8 font-black"> Claiming </span>
                                    <li> Claiming is extremely easy, you only connect a wallet!</li>
                                    <li>
                                        {' '}
                                        The link will unlock the funds from the escrow smart contract and send them to
                                        you
                                    </li>
                                </ul>
                                <a
                                    className="font-black text-black underline "
                                    href="https://docs.peanut.to/overview/what-we-do"
                                    target="_blank"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </global_components.PageWrapper>
    )
}
