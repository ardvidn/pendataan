import { Column, Entity, Index } from "typeorm";

@Index("adj_luas_pkey", ["kdBngLantai", "kdJpb", "tipeBng"], { unique: true })
@Entity("adj_luas", { schema: "public" })
export class AdjLuas {
  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("numeric", { name: "pct_adj_luas", precision: 5, scale: 2 })
  pctAdjLuas!: string;
}
