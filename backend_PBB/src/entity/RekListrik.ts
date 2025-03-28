import { Column, Entity, Index } from "typeorm";

@Index("rek_listrik_pkey", ["bulanKePln", "noPelangganPln", "thnPln"], {
  unique: true,
})
@Index("listrik_rek_listrik_fk", ["noPelangganPln"], {})
@Entity("rek_listrik", { schema: "public" })
export class RekListrik {
  @Column("character", { primary: true, name: "no_pelanggan_pln", length: 12 })
  noPelangganPln!: string;

  @Column("character", { primary: true, name: "thn_pln", length: 4 })
  thnPln!: string;

  @Column("character", { primary: true, name: "bulan_ke_pln", length: 2 })
  bulanKePln!: string;

  @Column("bigint", { name: "tagihan_pln", nullable: true })
  tagihanPln!: string | null;
}
