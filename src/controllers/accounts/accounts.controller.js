import { getConnection } from "../../databases/database";

const createAccount = async (req, res) => {
    console.log(req.body)
    try {
        // const { name, descripcion } = req.body;
        const accountColumns = {
            username,
            salt,
            verifier,
            session_key_auth,
            session_key_bnet,
            totp_secret,
            email,
            reg_mail,
            joindate,
            last_ip,
            last_attempt_ip,
            failed_logins,
            locked,
            lock_country,
            last_login,
            online,
            expansion,
            mutetime,
            mutereason,
            muteby,
            locale,
            os,
            recruiter,
            account
        }
        const connection = await getConnection();
        console.log('paso por aca')
        // const result = await connection.query("INSERT INTO account (username, salt, verifier, session_key_auth, session_key_bnet, totp_secret, email, reg_mail, joindate, last_ip, last_attempt_ip, failed_logins, locked, lock_country, last_login, online, expansion, mutetime, mutereason, muteby, locale, os, recruiter, account) VALUES ( " + req.body + ")");
        const result = await connection.query("INSERT INTO account SET ?", accountColumns);
        // res.json(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    createAccount
}