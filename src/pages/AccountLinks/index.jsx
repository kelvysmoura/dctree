
import LinkItem from '@/components/LinkItem';
import LinkList from '@/components/LinkList';
import storage from '@/storage';

const links = storage.getAccountLinks()

export default function AccountLinks() {
  return (
    <LinkList>
      { links.map((item, index) => <LinkItem key={index} {...item} />) }
    </LinkList>
  );
}