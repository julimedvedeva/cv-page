import ExperiencePage from '@/screens/ExperiencePage';
import { data } from '@/screens/ExperiencePage/constants';
import ExperienceLayout from '@/screens/ExperiencePage/layout';
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return (
    <ExperienceLayout>
      {Object.keys(data).includes(router.query.slug as any) && <ExperiencePage dataKey={router.query.slug as any}/>}
    </ExperienceLayout>
  );
}

export const getServerSideProps = async (context: any) => {
  const { slug } = context.query;
  // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
  // But null can be serializable

  // now we are passing the slug to the component
  return { props: { slug:slug } };
};