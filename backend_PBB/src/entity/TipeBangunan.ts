import { Column, Entity, Index } from "typeorm";

@Index("tipe_bangunan_pkey", ["tipeBng"], { unique: true })
@Entity("tipe_bangunan", { schema: "public" })
export class TipeBangunan {
  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character varying", { name: "nm_tipe_bng", length: 30 })
  nmTipeBng!: string;

  @Column("integer", { name: "luas_min_tipe_bng" })
  luasMinTipeBng!: number;

  @Column("integer", { name: "luas_max_tipe_bng" })
  luasMaxTipeBng!: number;

  @Column("numeric", {
    name: "faktor_pembagi_tipe_bng",
    precision: 8,
    scale: 4,
  })
  faktorPembagiTipeBng!: string;
}
