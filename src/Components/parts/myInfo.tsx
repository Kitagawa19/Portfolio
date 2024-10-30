import React from "react";
import { Typography, Box, Container, Avatar } from "@mui/material";
import { QualificationsTable } from "@/Components/parts/qualification";

export const MyProfile: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ padding: '60px 0' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        gap={3}
        mb={6}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#333' }}
        >
          My Profile
        </Typography>
        <Avatar
          alt="Your Name"
          src="/GitHubIcon.png"
          sx={{ width: 200, height: 200, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
        />
        <Typography
          variant="h4"
          component="h1"
          style={{ marginTop: '8px', fontWeight: '500', color: '#2c3e50' }}
        >
          Kota Kitagawa
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          style={{ marginBottom: '8px', color: '#7f8c8d' }}
        >
          所属：京都デザイン＆テクノロジー専門学校<br />
          学科：スーパーAI＆テクノロジー科<br />
          専攻：スーパーAIクリエイター専攻
        </Typography>
      </Box>
      <Box textAlign="center" mt={4}>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={6}>
          <Box flex={1} minWidth={300}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ fontWeight: 'bold', color: '#2c3e50' }}
            >
              自己紹介
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ lineHeight: '1.8', color: '#7f8c8d' }}
            >
              現在、学校で情報技術を専攻しており、これまでに多くの企業プロジェクトに参加し、実践的なスキルを磨いてきました。
              フロントエンドとバックエンドの両方に興味を持ち、学習を続けています。
              フロントエンドでは、主にNext.jsやTypeScript、JavaScriptを使ってユーザーフレンドリーなインターフェースの設計・開発に取り組んできました。
              一方で、バックエンドではPythonとGoを用い、API開発やデータ処理の基礎を学んでいます。
              また、最近は学生を対象にした会話型AIのWebアプリケーションも開発しました。
              このプロジェクトでは、Next.jsとFastAPIに加え、OpenAIのAPIやLangChainを活用し、ユーザーが自然な対話を通じて学校の情報を取得できる機能を実現しました。
              今後もフロントエンドとバックエンドのスキルをさらに高め、より高度なアプリケーション開発に挑戦したいと考えています。
            </Typography>
          </Box>
          <Box flex={1} minWidth={300}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ fontWeight: 'bold', color: '#2c3e50' }}
            >
              現在の目標
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ lineHeight: '1.8', color: '#7f8c8d' }}
            >
              現在、フロントエンドとバックエンド双方のスキルをさらに高め、実践的なアプリケーション開発において一層の成長を遂げることを目指しています。
              特に、Next.jsやFastAPIを活用したWebアプリケーション開発において、よりユーザー体験を向上させるための機能追加やパフォーマンス最適化に取り組んでいます。
              フロントエンドでは、洗練されたUI/UX設計を追求し、使いやすく直感的なインターフェースの実現を目指しています。
              また、バックエンドでは、効率的なデータ処理やAPI設計に注力し、セキュリティ面や拡張性も考慮したシステム構築に挑戦しています。
              さらに、会話型AIや自然言語処理分野にも興味があり、OpenAI APIやLangChainを用いた対話システムの改善や機能強化を図っています。
              ユーザーがスムーズに情報を取得し、より自然な対話が可能なアプリケーションの開発を通じて、学校や教育分野において実用的で価値のあるサービスを提供できるよう努めています。
              今後も、これらの技術を活用しながら、ユーザーにとって有益で質の高いアプリケーションの実現に向けてスキルを磨き続けたいと考えています。
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4} mt={4}>
          <QualificationsTable />
        </Box>
      </Box>
    </Container>
  )
}