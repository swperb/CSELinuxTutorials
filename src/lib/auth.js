import { getSession } from '@auth0/nextjs-auth0';

export function requireAdmin(req, res, next) {
    const session = getSession(req, res);
    if (!session || !session.user || session.user['http://yournamespace.com/roles'] !== 'admin') {
        res.status(401).end('Not authorized');
        return;
    }
    next();
}
