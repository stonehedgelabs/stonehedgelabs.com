import {
  ChakraProvider,
  defineConfig,
  defaultConfig,
  Box,
  Button,
  Code,
  Image,
  Flex,
  Heading,
  Link,
  createSystem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

function Py({ children }: { children: string }) {
  const { resolvedTheme } = useTheme();
  return (
    <SyntaxHighlighter
      language="python"
      style={resolvedTheme === "dark" ? oneDark : oneLight}
      customStyle={{
        borderRadius: "0.375rem",
        fontSize: "0.85rem",
        margin: 0,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Button
      aria-label="Toggle color mode"
      variant="ghost"
      size="sm"
      position="fixed"
      top={4}
      right={4}
      zIndex={10}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Box
        as="svg"
        {...{
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        w="1.2em"
        h="1.2em"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </>
        ) : (
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </Box>
    </Button>
  );
}

const config = defineConfig({
  theme: {
    breakpoints: {
      xxs: "16em",
      xs: "20em",
      xl: "80em",
      "2xl": "96em",
      "3xl": "120em",
      "4xl": "160em",
      "5xl": "192em",
      "6xl": "224em",
      "7xl": "256em",
      "8xl": "288em",
      "9xl": "320em",
      "10xl": "352em",
      "11xl": "384em",
      "12xl": "416em",
    },
    tokens: {
      fonts: {
        heading: { value: "'Old Standard TT', serif" },
        body: { value: "'Old Standard TT', serif" },
      },
      // ... your sizes and colors unchanged
    },
  },
});

const system = createSystem(defaultConfig, config);

function Home() {
  const projects = [
    {
      name: "Esper",
      url: "https://esperr.com",
      description: "Programmable traffic protection.",
    },
    {
      name: "Arbitration",
      url: "https://arbi.gg",
      description: "Scores. Reactions. Real-time.",
    },
    {
      name: "Gamecast",
      url: "https://gamecastt.com",
      description:
        "The fastest, most accurate, most affordable real-time sports API in the world.",
    },
    {
      name: "SystemG",
      url: "https://sysg.dev",
      description:
        "An open-source process manager tool for streamlined development workflows.",
    },
    {
      name: "Rust MCP Kit (mcpkit-rs)",
      url: "https://github.com/ra0x3/mcpkit-rs",
      description:
        "An open-source fork of the official Model Control Protocol (MCP) Rust SDK with added Web Assembly (WASM) integration.",
    },
    {
      name: "Libx",
      url: "https://libx.stream",
      description: "A web-based tool used to export your Spotify library.",
    },
  ];

  return (
    <Flex
      direction="column"
      align="center"
      h="100vh"
      w="100vw"
      px={{ base: 4, md: 8 }}
      pt={8}
    >
        <Image height={20} src={"/img/logo.png"} />
        <Heading
          as="h1"
          size={{ base: "xl", md: "2xl" }}
          mb={12}
          mt={4}
          textAlign="center"
        >
          Stonehedge Labs
        </Heading>
        <Box maxW="500px" p={4}>
          <Text textAlign="center">
            Stonehedge Labs is a software venture studio building both technical
            projects ranging from open-source tools like{" "}
            <Link
              href="https://sysg.dev"
              color="blue.500"
              textDecoration="underline"
            >
              SystemG
            </Link>{" "}
            to consumer sports platforms like{" "}
            <Link
              href="https://arbi.gg"
              color="blue.500"
              textDecoration="underline"
            >
              Arbitration
            </Link>
            . We experiment, prototype, and launch dope shit.
          </Text>
        </Box>

        {/* flex=1 pushes footer to bottom */}
        <Stack
          flex="1"
          w="100%"
          maxW="500px"
          textAlign={{ base: "center", md: "left" }}
        >
          {projects.map((project) => (
            <Box
              cursor="pointer"
              key={project.name}
              borderWidth="1px"
              borderRadius="lg"
              onClick={() => window.open(project.url, "_blank")}
              p={6}
              _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
            >
              <Link href={project.url}>
                <Heading as="h2" size="md" mb={2} color="blue.500">
                  {project.name}
                </Heading>
              </Link>
              <Text fontSize="sm" color="fg.muted">
                {project.description}
              </Text>
            </Box>
          ))}
        </Stack>

        <Flex
          as="footer"
          align="center"
          w="100vw"
          mt={12}
          flexDirection={"column"}
        >
          <Text
            cursor={"pointer"}
            fontSize="xs"
            color={"#3b82f6"}
            onClick={() => {
              window.open("https://rashad.wiki", "_blank");
            }}
          >
            @rashad.wiki
          </Text>
          <Text fontSize="xs">Copyright of StoneHedge Labs™ 2023</Text>
        </Flex>
      </Flex>
  );
}

function Post() {
  return (
    <Flex direction="column" align="center" w="100vw" px={{ base: 4, md: 8 }} py={10}>
      <Box maxW="720px" w="100%">
        <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
          LLMs as a Last Resort
        </Heading>
        <Text mt={2} fontStyle="italic" color="fg.muted">
          I reached for the LLM first. Scale taught me to reach for it last.
        </Text>
        <Box h="1px" w="100%" bg="border" my={6} />

        <Stack gap={5} fontSize={{ base: "md", md: "lg" }} lineHeight={1.7}>
          <Text fontSize={{ base: "md", md: "lg" }} color="fg.muted">
            My OpenAI bill hit <Code fontWeight="bold">$540/week</Code> and I
            spent about a month convinced I knew why. I was wrong basically every
            time I guessed. What actually fixed it was boring: I added logging,
            looked at the numbers, and slowly realized most of what I was paying a
            model to do wasn't a language problem at all. Below is roughly the
            order it happened in — including the thing I sank a day into that went
            nowhere (prompt caching). If you're shipping LLM stuff to real
            traffic, the short version is: reach for the model last, not first.
          </Text>

          <Heading as="h2" size="lg" mt={4} fontWeight="bold">

            The bill counts tokens, not calls
          </Heading>
          <Text>
            I build{" "}
            <Link
              href="https://app.arbi.gg"
              color="blue.500"
              textDecoration="underline"
            >
              Arbitration
            </Link>
            , a sports app with live scores, reactions, and a curated content
            feed. That feed is the part this post is about: it scrapes articles,
            Reddit, and Twitter, and back then every item that came in got handed
            to an LLM to write a title and summary, score how relevant it was, and
            tag it. That's something like{" "}
            <Code fontWeight="bold">~40,000</Code> model calls a day. One morning
            the whole pipeline just stopped — <Code>insufficient_quota</Code>,
            account dry — and that's when I actually looked at the dashboard and
            saw it creeping toward <Code fontWeight="bold">$540/week</Code>.
          </Text>
          <Text>
            My first move was to go find the calls that looked expensive and kill
            them. So I ripped out social enrichment. Felt obvious — why am I
            paying a model to "enrich" a Reddit post? And honestly it was the
            right call to remove it (those posts already have a title and a body,
            there's nothing to add). But the bill didn't move. Like, at all.
            Social posts are tiny, so even at thousands of calls they were barely
            any tokens. I'd deleted something that was expensive to <em>look</em>{" "}
            at and basically free to actually run. That was the first time it
            clicked that I'd been counting calls when the bill counts tokens.
          </Text>

          <Heading as="h2" size="lg" mt={4} fontWeight="bold">

            Measure, don't guess
          </Heading>
          <Text>
            At that point I gave up guessing and just logged the token count at
            every callsite, split into the static part of the prompt and the
            variable part. The numbers were kind of embarrassing. The real money
            wasn't going to anything I'd suspected — it was a{" "}
            <Code fontWeight="bold">~1,800-token</Code> "here's what's going on in
            sports right now" blob I was stuffing into <em>every</em> single
            request, plus up to <Code fontWeight="bold">8KB</Code> of raw scraped
            HTML riding along with it. Forty thousand times a day. I'd have never
            guessed that from reading the code; it only showed up once I measured.
          </Text>

          <Heading as="h2" size="lg" mt={4} fontWeight="bold">

            Most of it was never a language problem
          </Heading>
          <Text>
            Then the bigger one: I was asking a language model "how relevant is
            this article?" But relevance is just "how close is this to what
            people actually care about right now" — that's a similarity question,
            not a language one. So scoring stopped being an LLM call at all. I
            embed the live sports topics once per run, embed each item's title +
            summary, and the "score" is just cosine distance against the hottest
            topics. The whole scoring line on the bill went to basically zero
            (embeddings are a few cents a day), and the quota cliff that kept
            killing the pipeline went away too, because the call that ran most
            often didn't exist anymore.
          </Text>
          <Text>
            The annoying part was turning a raw cosine into a usable score.
            Cosine similarities on real text bunch up in a tight band — most
            everything lands around <Code fontWeight="bold">0.2–0.5</Code>, so any
            fixed cutoff just dumps every item into the same bucket and the feed
            looks random. So I ranked <em>within the batch</em> instead: sort the
            window, map by percentile onto a Fibonacci scale, and only fall back
            to fixed thresholds when a batch is too small to rank. That's the
            hand-rolled bit that actually made the feed feel curated, and there's
            no model anywhere in it:
          </Text>

          <Py>
{`PERCENTILE_BUCKETS = ((0.92, 13), (0.75, 8), (0.55, 5), (0.35, 3), (0.15, 2))

def _percentile_buckets(scores: list[float]) -> list[int]:
    # cosines cluster ~0.2-0.5, so a fixed [0,1] cutoff collapses everything.
    # rank within THIS window instead: top slice -> 13 regardless of absolute.
    n = len(scores)
    if n < MIN_WINDOW_FOR_PERCENTILE:      # too small to rank -> fixed cutoffs
        return [_to_fibonacci(s) for s in scores]
    order = sorted(range(n), key=lambda i: scores[i])
    rank = [0] * n
    for position, idx in enumerate(order):
        rank[idx] = position
    out = []
    for r in rank:
        pct = r / (n - 1)
        out.append(next((v for cut, v in PERCENTILE_BUCKETS if pct >= cut), 1))
    return out`}
          </Py>

          <Text>
            Topics aren't all worth the same, either. A breaking injury today
            should outrank a standings note from last week, so each topic carries
            a weight of <em>recency-bucket × confidence</em>, and tags get
            assigned by nearest-neighbor: I keep a topic's tags only if its raw
            cosine clears a threshold, so a recency boost can't sneak an
            irrelevant tag onto an item. And because the embeddings API can run
            out of quota mid-run, there's a deterministic keyword-overlap fallback
            with no network at all — if OpenAI is down, the feed degrades to
            keyword matching instead of going dark:
          </Text>

          <Py>
{`BUCKET_WEIGHTS = {"today": 1.0, "yesterday": 0.9, "this_week": 0.7,
                  "next_two_weeks": 0.6, "previous_two_weeks": 0.4}

# zero-network fallback when the embeddings API is unavailable
for weight, keywords, tags, league in topics:
    hits = sum(1 for kw in keywords if kw in haystack)
    if not hits:
        continue
    strength = weight * min(hits, 3) / 3
    if strength > best_weight:
        best_weight, best_tags = strength, tags`}
          </Py>
          <Text>
            Enrichment was the one job I couldn't delete — it actually writes
            prose, that's a real LLM task. So instead of getting rid of the call I
            just put it on a diet: cut the context blob, stopped shipping it raw
            HTML, and batched roughly <Code fontWeight="bold">~10</Code> articles
            into one call instead of one-at-a-time. The HTML stripping is the part
            that surprised me most — a scraped page is mostly nav, share buttons,
            "related stories," and a few hundred thumbnail URLs, and I was paying
            for all of it on every call.
          </Text>

          <Py>
{`# stop paying for sidebars, share widgets, and 200 CDN thumbnail URLs
root = soup.find("article") or soup.find("main") or soup
for el in root.find_all(True):
    hint = " ".join([*(el.get("class") or []), el.get("id") or ""]).lower()
    if any(j in hint for j in ("nav","promo","share","related","comment","footer")):
        el.decompose()
text = "\\n".join(l for l in root.get_text("\\n").splitlines() if len(l.split()) >= 4)`}
          </Py>

          <Heading as="h2" size="lg" mt={4} fontWeight="bold">

            The dead end: prompt caching
          </Heading>
          <Text>
            Not everything I tried worked. I spent a day trying to get prompt
            caching to kick in — pulled the static rubric out into a clean system
            prompt, the whole thing — and it just never engaged. Turns out
            OpenAI's prefix cache needs the shared prefix to be at least{" "}
            <Code fontWeight="bold">1,024 tokens</Code>, and after I'd trimmed
            everything down mine was under that. The only way to get over the line
            would've been to pad the prompt with junk, which costs more than the
            caching would ever save. So, dead end. The one good thing is the
            logging caught it fast, before I'd built anything real on top of it.
          </Text>
          <Text>
            None of this was clever. The pattern, if there is one, is just that
            for a while I reached for the model by default and the bill quietly
            punished me for it. The stuff that actually worked was either
            replacing the model with something dumber (embeddings, a dot product)
            or feeding it way less. So now I treat the LLM as the thing I reach
            for last — and I don't trust my gut about what's expensive, I just go
            look at the tokens.
          </Text>

          <Link
            href="https://app.arbi.gg"
            display="block"
            cursor="pointer"
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            mt={4}
            textDecoration="none"
            _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          >
            <Text fontSize="xs" textTransform="uppercase" letterSpacing="wide" color="fg.muted">
              Built with this curator
            </Text>
            <Heading as="h3" size="md" mt={1} color="blue.500">
              Arbitration — app.arbi.gg
            </Heading>
            <Text fontSize="sm" color="fg.muted" mt={1}>
              Live scores, real-time reactions, and premium sports content —
              powered by the same pipeline this post is about. Check it out at{" "}
              <strong>app.arbi.gg</strong>.
            </Text>
          </Link>

          <Link href="/" alignSelf="flex-start" mt={2} textDecoration="none">
            <Button variant="outline">
              <Box
                as="svg"
                {...{
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
                w="1em"
                h="1em"
                mr={2}
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </Box>
              Stonehedge Labs
            </Button>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider value={system}>
      <Box minH="100vh" bg="bg" color="fg">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/llms-as-a-last-resort" element={<Post />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
