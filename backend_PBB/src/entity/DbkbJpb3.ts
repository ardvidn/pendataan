import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_jpb3_pkey", ["kdDati2", "kdPropinsi", "lbrBentMaxDbkbJpb3", "lbrBentMinDbkbJpb3", "thnDbkbJpb3", "tingKolomMaxDbkbJpb3", "tingKolomMinDbkbJpb3"], { unique: true })
@Index("c29_1_ak", ["kdDati2", "kdPropinsi", "lbrBentMaxDbkbJpb3", "lbrBentMinDbkbJpb3", "thnDbkbJpb3", "tingKolomMaxDbkbJpb3", "tingKolomMinDbkbJpb3"], { unique: true })
@Entity("dbkb_jpb3", { schema: "public" })
export class DbkbJpb3 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb3", length: 4 })
  thnDbkbJpb3!: string;

  @Column("smallint", { primary: true, name: "lbr_bent_min_dbkb_jpb3" })
  lbrBentMinDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "lbr_bent_max_dbkb_jpb3" })
  lbrBentMaxDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_min_dbkb_jpb3" })
  tingKolomMinDbkbJpb3!: number;

  @Column("smallint", { primary: true, name: "ting_kolom_max_dbkb_jpb3" })
  tingKolomMaxDbkbJpb3!: number;

  @Column("numeric", { name: "nilai_dbkb_jpb3", precision: 12, scale: 2 })
  nilaiDbkbJpb3!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs7)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
