import {Card, Col, Row, Button, Text, Grid} from "@nextui-org/react";
// @ts-ignore
import myTradingapp from "../../assets/myTradingapp.png";
// @ts-ignore
import StockLogo from "../../assets/StockLogo.png";

const handleButtonClick = () => {
    window.location.href = 'https://github.com/Sargezian/MyTradingApp';
};

export const MyTradingApp = () => (
    <Grid xs={12} sm={5}>
        <Card css={{ w: "100%", h: "400px", backgroundColor: "Black" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E"css={{
                        textAlign: "left",
                        "@media (max-width: 987px)": {
                            display: "none",
                        },
                    }}>
                        Native Application
                    </Text>
                    <Text h3 color="white">
                        UI Design Expert
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={myTradingapp}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col span={3}>
                                <Card.Image
                                    src={StockLogo}
                                    css={{ bg: "black", br: "50%" }}
                                    height={40}
                                    width={40}
                                    alt="MyTrading App"
                                />
                            </Col>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                    @MyTradingApp
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Developed a Mobile-Trading application for enthusiastic traders
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#ffffff", bg: "rgba(175,201,199,0.15)", marginRight: "20px" }}
                                onClick={handleButtonClick}
                            >
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    See project
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
);
