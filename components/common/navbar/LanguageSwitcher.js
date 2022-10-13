import Link from 'next/link';
import { linkResolver, hrefResolver } from '../../../prismicio';
import styled from 'styled-components'

const LangLink = styled.a`
  position:relative;
  display:flex;
  background-color: unset;
  background-image: unset;
  background-size: unset;
  background-repeat: unset;
  background-clip: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  padding:6px 12px;
  background:rgba(255,255,255,0.1);
  border: 1px solid ${props => props.inhome ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
  border-radius:6px;
  position:relative;
  overflow:hidden;
  .lang-text{
    font-size:11px;
    line-height: 11px;
    letter-spacing:1px;
    font-weight:200;
    opacity:1;
    color:${props => props.inhome ? 'var(--text-color)' : 'white'};
  }
`

const AltLangs = ({ altLangs = [], currentLang, inhome, isDesktop }) =>
  altLangs.map((altLang,i) => {
    return (
      <Link
        locale={altLang.lang}
        as={linkResolver(altLang)}
        href={hrefResolver(altLang)}
        passHref
        key={`lang-${i}`}
      >
        <LangLink currentLang={currentLang} inhome={inhome} title={altLang.lang === 'en-us' ? 'Switch to english' : 'Cambiar a español'}>{altLang.lang === 'en-us' ? <div className='lang-text'>Español</div> : <div className='lang-text'>English</div>}</LangLink>
      </Link>
    );
  });

const LanguageSwitcher = ({ altLangs, currentLang, inhome, isDesktop }) => <AltLangs altLangs={altLangs} currentLang={currentLang} inhome={inhome}/>;

export default LanguageSwitcher;