import { requireAdmin } from '../../../lib/auth';

export default async function handler(req, res) {
    requireAdmin(req, res, async () => {
        // Your API logic here
    });
}
