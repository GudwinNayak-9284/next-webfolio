import clsx from 'clsx';
import Link from 'next/link';

import {
    ExternalLink,
    GitHubIcon,
    LinkedinIcon,
    WakaTimeIcon,
} from '@/components/ui/icons';

import dayjs from '@/lib/utils';
import Container from '@/components/ui/container';

function LastUpdate() {
    return (
        <Link
            href="https://github.com/GudwinNayak-9284"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('hover:underline')}
        >
            <span>see the recent update on GitHub</span>
        </Link>
    );
}

interface FooterLinkProps {
    title: string;
    href: string;
    label?: 'new' | 'soon';
    isInternal?: boolean;
}

function FooterLink({
    title,
    href,
    label = undefined,
    isInternal = true,
}: FooterLinkProps) {
    if (label === 'soon') {
        return (
            <span className={clsx('flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900 dark:text-slate-200 cursor-not-allowed text-slate-600', ' dark:text-slate-400')}>
                {title}
                <span className={clsx('border-divider-light rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900 dark:text-slate-200')}>{label}</span>
            </span>
        );
    }

    if (isInternal) {
        return (
            <Link href={href} className={clsx('flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900', 'dark:text-slate-200')}>
                {title}
                {label && <span className={clsx('border-divider-light rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900', 'dark:text-slate-200')}>{label}</span>}
            </Link>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900', 'dark:text-slate-200')}
        >
            {title}
            <ExternalLink className={clsx('h-3.5 w-3.5')} />
            {label && <span className={clsx('border-divider-light rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900', 'dark:text-slate-200')}>{label}</span>}
        </a>
    );
}

interface FooterGroupProps {
    title: string;
    links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
    return (
        <div className={clsx('flex-1')}>
            <div
                className={clsx(
                    'mb-2 px-2 text-[13px] text-slate-600',
                    'dark:text-slate-400'
                )}
            >
                {title}
            </div>
            <ul className={clsx('flex flex-col')}>
                {links.map(({ title: linkTitle, href, label, isInternal }) => (
                    <li key={href}>
                        <FooterLink
                            title={linkTitle}
                            href={href}
                            label={label}
                            isInternal={isInternal}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FooterDescription() {
    return (
        <div className={clsx('max-w-[348px]')}>
            <div
                className={clsx(
                    'mb-3 text-[13px] text-slate-600',
                    'dark:text-slate-400'
                )}
            >
                About Me
            </div>
            <p className={clsx('mb-4 font-normal leading-relaxed')}>
                I&apos;m Gudwin Nayak, a <strong>front-end developer</strong> who loves
                intuitive, clean and modern UI design.
            </p>
            <ul className={clsx('-ml-2 flex gap-1')}>
                <li>
                    <a
                        href="https://twitter.com/sylvaincodes"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className={clsx('flex h-9 w-9 items-center justify-center')}
                        aria-label="My Twitter profile"
                        title="My Twitter profile"
                    >
                        <LinkedinIcon className={clsx('h-5 w-5')} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/sylvaincodes"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className={clsx('flex h-9 w-9 items-center justify-center')}
                        aria-label="My GitHub profile"
                        title="My GitHub profile"
                    >
                        <GitHubIcon className={clsx('h-5 w-5')} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://wakatime.com/@Gudwin_786"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className={clsx('flex h-9 w-9 items-center justify-center')}
                        aria-label="My Figma profile"
                        title="My Waka Time Profile"
                    >
                        <WakaTimeIcon className={clsx('h-5 w-5')} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

function Footer() {
    return (
        <footer
            className={clsx(
                'bg-grid-slate-100/100 [mask-image:linear-gradient(transparent,black,black)] ',
                'dark:bg-grid-slate-900/100'
            )}
        >
            <Container>
                <div className={clsx('py-10 font-semibold')}>
                    <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
                        <div className={clsx('flex-1')}>
                            <FooterDescription />
                        </div>
                        <div
                            className={clsx(
                                '-mx-2 flex flex-1 flex-col gap-8',
                                'sm:flex-row sm:gap-16 lg:mx-0'
                            )}
                        >
                            <div className={clsx('flex', 'sm:gap-16')}>
                                <FooterGroup
                                    title="Work"
                                    links={[
                                        { title: 'Contact', href: '/contact' },

                                        {
                                            title: 'Skills and Tools',
                                            href: '#',
                                        },
                                        { title: 'Studio', href: '#' },
                                    ]}
                                />
                                <FooterGroup
                                    title="Learn"
                                    links={[
                                        {
                                            title: 'Docs',
                                            href: '#',
                                        },
                                        {
                                            title: 'Personal Blog',
                                            href: '/blog',
                                        },
                                        {
                                            title: 'T.I.L',
                                            href: '#',
                                            label: 'new',
                                        },
                                    ]}
                                />
                            </div>
                            <div className={clsx('flex', 'sm:gap-16')}>
                                <FooterGroup
                                    title="This Site"
                                    links={[

                                        {
                                            title: 'Source Code',
                                            href: 'https://github.com/sylvaincodes',
                                            isInternal: false,
                                        },
                                        {
                                            title: 'Credits',
                                            href: '#',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        'border-divider-light flex justify-between border-t py-6 text-xs',
                        'dark:border-divider-dark'
                    )}
                >
                    <div className={clsx('font-semibold')}>
                        &copy; {dayjs().format('YYYY')}, Gudwin Nayak
                    </div>
                    <div className={clsx('text-slate-500', 'dark:text-slate-400')}>
                        <LastUpdate />
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;