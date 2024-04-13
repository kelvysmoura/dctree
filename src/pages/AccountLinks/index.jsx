
import LinkItem from '@/components/LinkItem';
import LinkList from '@/components/LinkList';

const links = JSON.parse(window.localStorage.getItem("account-links"));

export default function AccountLinks() {
  return (
    <LinkList>
      { links.map((item, index) => <LinkItem key={index} {...item} />) }
    </LinkList>
  );
}