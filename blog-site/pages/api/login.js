// /pages/api/login.js
import prisma from '../../src/lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // データベースからユーザー情報を取得
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // データベースから全ての投稿情報を取得
      const post = await prisma.post.findMany();

      if (user) {

        // 入力されたパスワードをbcryptでハッシュ化
        const hashedPassword = await bcrypt.hash(password, 10);

        // パスワードを確認
        const isValid = await bcrypt.compare(hashedPassword, user.password);

        // TODO ログの確認、passwordのconpareに失敗しているので要確認
        console.log('isValid前pass。isValid = ' + isValid + '  で、hashedPassword =  ' + hashedPassword + '  で、DBのpassword = ' + user.password)
        
        // 入力したpasswordと一致する場合
        //if ( await bcrypt.compare(hashedPassword, user.password)) {
        
        if ( user) {

          // ユーザーが存在し、パスワードが正しい場合、必要な情報を返す
          const userData = {
            name: user.name,
            password: user.password,
            email: user.email,
            userId: user.userId,
            // title: post.title,
            content: post.content,
          };
          console.log('DBとの接続結果は、' + userData.name)
          res.status(200).json(userData);
        } else {
          // パスワードが間違っている場合
          res.status(401).json({ message: 'Invalid email or password' });
        }
      } else {
        // ユーザーが存在しない場合は、アラートでユーザーが存在しないですってエラーを出す感じ
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
