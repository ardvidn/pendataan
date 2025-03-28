import { Column, Entity, Index } from "typeorm";

@Index("upb_ppbi_fk", ["kdPbi", "kdPebin", "kdPpbi"], {})
@Index("ref_upb_pkey", ["kdPbi", "kdPebin", "kdPpbi", "kdUpb"], {
  unique: true,
})
@Entity("ref_upb", { schema: "public" })
export class RefUpb {
  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character", { primary: true, name: "kd_ppbi", length: 2 })
  kdPpbi!: string;

  @Column("character", { primary: true, name: "kd_upb", length: 6 })
  kdUpb!: string;

  @Column("character varying", { name: "nm_upb", nullable: true, length: 50 })
  nmUpb!: string | null;

  @Column("character varying", {
    name: "jalan_upb",
    nullable: true,
    length: 30,
  })
  jalanUpb!: string | null;

  @Column("character varying", {
    name: "blok_kav_no_upb",
    nullable: true,
    length: 15,
  })
  blokKavNoUpb!: string | null;

  @Column("character varying", { name: "rw_upb", nullable: true, length: 2 })
  rwUpb!: string | null;

  @Column("character varying", { name: "rt_upb", nullable: true, length: 3 })
  rtUpb!: string | null;

  @Column("character varying", {
    name: "kelurahan_upb",
    nullable: true,
    length: 30,
  })
  kelurahanUpb!: string | null;

  @Column("character varying", { name: "kota_upb", nullable: true, length: 30 })
  kotaUpb!: string | null;
}
