import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c34_1_ak", ["kdDati2", "kdPropinsi", "lbrBentMaxDbkbJpb8", "lbrBentMinDbkbJpb8", "thnDbkbJpb8", "tingKolomMaxDbkbJpb8", "tingKolomMinDbkbJpb8"], { unique: true })
@Index("dbkb_jpb8_pkey", ["kdDati2", "kdPropinsi", "lbrBentMaxDbkbJpb8", "lbrBentMinDbkbJpb8", "thnDbkbJpb8", "tingKolomMaxDbkbJpb8", "tingKolomMinDbkbJpb8"], { unique: true })
@Entity("dbkb_jpb8", { schema: "public" })
export class DbkbJpb8 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb8", length: 4 })
  thnDbkbJpb8!: string;

  @Column("smallint", { primary: true, name: "lbr_bent_min_dbkb_jpb8" })
  lbrBentMinDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "lbr_bent_max_dbkb_jpb8" })
  lbrBentMaxDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_min_dbkb_jpb8" })
  tingKolomMinDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_max_dbkb_jpb8" })
  tingKolomMaxDbkbJpb8!: number;

  @Column("numeric", { name: "nilai_dbkb_jpb8", precision: 12, scale: 2 })
  nilaiDbkbJpb8!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpb12)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
