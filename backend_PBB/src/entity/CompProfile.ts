import { Column, Entity, Index } from "typeorm";

@Index("jns_usaha_comp_fk", ["kdJnsUsaha"], {})
@Index("status_kantor_comp_fk", ["kdStatKantor"], {})
@Index("comp_profile_pkey", ["mfcabComp", "mfkppComp", "mfnpwpComp"], {
  unique: true,
})
@Entity("comp_profile", { schema: "public" })
export class CompProfile {
  @Column("character", { primary: true, name: "mfnpwp_comp", length: 9 })
  mfnpwpComp!: string;

  @Column("character", { primary: true, name: "mfkpp_comp", length: 3 })
  mfkppComp!: string;

  @Column("character", { primary: true, name: "mfcab_comp", length: 3 })
  mfcabComp!: string;

  @Column("character", { name: "kd_stat_kantor", nullable: true, length: 2 })
  kdStatKantor!: string | null;

  @Column("character", { name: "kd_jns_usaha", nullable: true, length: 2 })
  kdJnsUsaha!: string | null;

  @Column("character varying", {
    name: "nm_perusahaan",
    nullable: true,
    length: 50,
  })
  nmPerusahaan!: string | null;

  @Column("character varying", { name: "no_akta", nullable: true, length: 30 })
  noAkta!: string | null;

  @Column("character varying", { name: "no_situ", nullable: true, length: 30 })
  noSitu!: string | null;

  @Column("character varying", { name: "no_siup", nullable: true, length: 30 })
  noSiup!: string | null;

  @Column("character varying", {
    name: "no_ijin_usaha",
    nullable: true,
    length: 30,
  })
  noIjinUsaha!: string | null;

  @Column("character varying", {
    name: "franchise",
    nullable: true,
    length: 30,
  })
  franchise!: string | null;
}
