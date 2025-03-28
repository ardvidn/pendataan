import { Column, Entity, Index } from "typeorm";

@Index("adj_bangunan_jpb8_pkey", ["kdAdj", "lbrBentMaxAdj", "lbrBentMinAdj", "tingKolomMaxAdj", "tingKolomMinAdj"], { unique: true })
@Entity("adj_bangunan_jpb8", { schema: "public" })
export class AdjBangunanJpb8 {
  @Column("character", { primary: true, name: "kd_adj", length: 2 })
  kdAdj!: string;

  @Column("smallint", { primary: true, name: "lbr_bent_min_adj" })
  lbrBentMinAdj!: number;

  @Column("smallint", { primary: true, name: "lbr_bent_max_adj" })
  lbrBentMaxAdj!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_min_adj" })
  tingKolomMinAdj!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_max_adj" })
  tingKolomMaxAdj!: number;

  @Column("numeric", { name: "pct_adj_bng_jpb8", precision: 5, scale: 2 })
  pctAdjBngJpb8!: string;
}
