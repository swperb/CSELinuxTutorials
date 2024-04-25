import { useRouter } from 'next/router';
import styles from '@/components/backArrow/backArrow.module.css';

export default function BackArrow() {
  const router = useRouter();

  function getParentPath() {
    const pathSegments = router.pathname.split('/');
    const filteredSegments = pathSegments.filter(segment => segment !== '').slice(0, -1);
    return '/' + filteredSegments.join('/');
  }

  return (
    <div className={styles.back_arrow} onClick={() => router.back()}>
        <svg fill="#5D1725" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="74px" height="74px" viewBox="0 0 961.70 961.70" stroke="#5D1725" stroke-width="0.00961699"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M820.9,140.9c-44.1-44.1-95.6-78.8-152.801-103C608.801,12.8,545.801,0,480.9,0C416,0,353,12.8,293.7,37.9 c-57.3,24.2-108.7,58.8-152.8,103c-44.1,44.1-78.8,95.5-103,152.8C12.8,353,0,416,0,480.9c0,64.9,12.8,127.9,37.9,187.199 C62.1,725.4,96.8,776.801,140.9,820.9s95.6,78.799,152.8,103C353,949,416,961.699,480.9,961.699 c64.901,0,127.901-12.699,187.2-37.799C725.4,899.699,776.801,865,820.9,820.9s78.799-95.5,103-152.801 c25.1-59.299,37.799-122.299,37.799-187.199C961.699,416,949,353,923.9,293.7C899.699,236.4,865.1,185,820.9,140.9z M700.699,700.699c-58.699,58.701-136.799,91-219.799,91c-83,0-161.1-32.299-219.8-91C202.4,642,170.1,563.9,170.1,480.9 c0-83,32.3-161.101,91-219.8c58.7-58.7,136.8-91,219.8-91c83,0,161.1,32.3,219.799,91c58.701,58.7,91,136.8,91,219.8 C791.699,563.9,759.4,642,700.699,700.699z"></path> <polygon points="583.4,710.301 583.4,251.5 256.3,480.9 "></polygon> </g> </g> </g></svg>
    </div>
  );
}
