function drawGift(size: number, symbol: string): string {
    if (size <= 1) return '';

    let gift: string = '';

    const lineBreak = (): string => gift += '\n';

    const drawLine = (content: string): string => gift += content;

    drawLine(symbol.repeat(size));
    lineBreak();


    for (let i = 0; i < size - 2; i++) {
        drawLine(symbol);
        drawLine(' '.repeat(size - 2));
        drawLine(symbol);
        lineBreak();
    }

    drawLine(symbol.repeat(size));

    return gift;
}
