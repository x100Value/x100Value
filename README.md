# Valentin Rodionov

**AI / LLM engineer. I design systems on top of language models and run them in production.**

I do not write code by hand. AI agents write the code; I decide how the system is built, set the task, verify the result with measurements, and take it to a working service on a live server. Every engineering decision below is mine.

Portfolio and articles: [thanksailab.com](https://thanksailab.com) · Telegram: [@theloans](https://t.me/theloans)

---

## What I build

| Project | What it does | Status |
|---|---|---|
| [tg-llm-router](https://github.com/x100Value/tg-llm-router) | One Telegram Mini App for many LLM providers: automatic fallback, BYOK, SSE streaming, 4 user roles | [routertext.ru](https://routertext.ru) |
| [skillsmarketplace](https://github.com/x100Value/skillsmarketplace) | Task marketplace on Telegram Stars: signed `initData` auth, idempotent payment webhooks, hold/release ledger | [skillsmarketplace.ru](https://skillsmarketplace.ru) |
| [GGaMemes](https://github.com/x100Value/GGaMemes) | Real-time party game in Telegram: match a GIF to a situation, vote for the funniest | Code only |
| [TNFTFinance](https://github.com/x100Value/TNFTFinance) | NFT-collateral lending prototype on TON, with a secret-scan pre-commit gate and a pre-mainnet checklist | Testnet |

Not on GitHub yet, running on my own servers: a pitch-screening engine on a three-tier model cascade, a TON smart-contract pre-check bot, a poker session analyzer, a relocation guide site with live search traffic, and four Telegram services with paid subscriptions.

## Engineering decisions I stand behind

- **A cascade instead of one model.** A cheap model kills junk in batches, a mid model ranks the survivors, the expensive one only reads the finalists. A thousand pitches cost about $6 per run instead of tens.
- **Pairwise duels instead of absolute scores.** Ranking runs as Swiss-style duels with bias control, because models are bad at giving a number out of ten and good at comparing two things.
- **Rules before the model, not instead of it.** In contract pre-checks, deterministic rules run first; only what they cannot answer goes to the paid model. On checkable facts an LLM is a cost, not an upgrade.
- **A development mode with zero API calls.** A stub returns plausible answers while the cost counter uses real prices, so a pipeline can be built for months without spending a cent.
- **Quality measured against a fixed example set,** never by eye: a new rule ships only if the reference run did not get worse.

## Stack

`Claude Code` · `Anthropic Claude API` · `LLM cascades and routing` · `prompt engineering` · `Telegram Bot API` · `Telegram Mini Apps` · `aiogram` · `Node.js` · `PostgreSQL` · `Linux` · `systemd` · `PM2` · `TON`

---

## По-русски

Проектирую системы на языковых моделях и довожу их до работающего сервиса на живом сервере. Код руками не пишу: код пишут ИИ-агенты, а моя работа - решить, как устроена система, поставить задачу, проверить результат замером и выкатить в прод.

За полтора года в одиночку запустил около десяти сервисов: Telegram-боты с платными подписками, мини-приложения, сайт с поисковым трафиком, движок отбора заявок на каскаде из трёх моделей, проверка смарт-контрактов TON.

Открыт к работе: удалённо или с релокацией. Пишите в [Telegram](https://t.me/theloans).
