import { getConnectionAuth } from "../../databases/auth/auth.db";


const createAccount = async (req, res) => {
    try {
        const {
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
        } = req.body;
        const connection = await getConnectionAuth();
        const result = await connection.query("INSERT INTO account SET ?", req.body);

        // var result = await connection.query("SELECT * FROM account ");
        // res.json({ message: "Account added" })
        console.log('CUENTA AGREGADA')
        // const b64_to_utf8 = str => JSON.parse(new Buffer.alloc(str,'base64').toString('utf-8'));
        // const item = b64_to_utf8(result[0].salt.data[0])
        // console.log(result[0].salt.data[0])
        res.json(result)
        // https://codepen.io/vasa-develop/pen/vYEYeQp
        // https://www.youtube.com/watch?v=dkic3MU3858
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    createAccount
}