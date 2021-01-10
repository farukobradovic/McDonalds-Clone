namespace Domain
{
    public class ProductInvoice
    {
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int InvoiceId { get; set; }
        public virtual Invoice Invoice { get; set; }
        public int Quantity { get; set; }

    }
}