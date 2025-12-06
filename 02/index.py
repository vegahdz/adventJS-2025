def manufacture_gifts(gifts_to_produce):

    if len(gifts_to_produce) == 0:
        return []

    toys_list = []

    for element in gifts_to_produce:
        toy = element["toy"]
        quantity = element["quantity"]

        if quantity and quantity > 0:
            for _ in range(quantity):
                toys_list.append(toy)

    return toys_list
