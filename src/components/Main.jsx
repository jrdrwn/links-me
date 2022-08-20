import CardLink from './CardLink';
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsTelegram,
  BsTwitter,
} from 'react-icons/bs';
import WebsiteLogo from './WebsiteLogo';

export default function Main() {
  return (
    <main className="mt-20">
      <div className="container flex flex-wrap justify-center gap-4 px-4">
        <CardLink
          logoName={'MyWebsite'}
          link={'www.jordiirawan.site'}
          logo={<WebsiteLogo />}
          primaryColor={'#5bd1d7'}
        />
        <CardLink
          logoName={'Github'}
          link={'github.com/jrdrwn'}
          logo={<BsGithub size={40} />}
          primaryColor={'#181717'}
        />
        <CardLink
          logoName={'Instagram'}
          link={'instagram.com/_jrdrwan'}
          logo={<BsInstagram size={40} />}
          primaryColor={'#E4405F'}
        />
        <CardLink
          logoName={'Twitter'}
          link={'twitter.com/_jrdrwan'}
          logo={<BsTwitter size={40} />}
          primaryColor={'#1DA1F2'}
        />
        <CardLink
          logoName={'Discord'}
          link={'discord.com/users/759931931084849152'}
          logo={<BsDiscord size={40} />}
          primaryColor={'#5865F2'}
        />
        <CardLink
          logoName={'Telegram'}
          link={'t.me/jrdrwan'}
          logo={<BsTelegram size={40} />}
          primaryColor={'#26A5E4'}
        />
      </div>
    </main>
  );
}
